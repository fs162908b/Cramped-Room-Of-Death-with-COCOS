import {
  _decorator,
  Component,
  Node,
  Event,
  Graphics,
  view,
  Color,
  game,
  UITransform,
  BlockInputEvents,
  Label,
  director,
  Canvas,
} from 'cc'
import EventManager from '../../Runtime/EventManager'
import { CONTROLLER_ENUM, EVENT_ENUM } from '../../Enums'
const { ccclass, property } = _decorator

enum FADE_STATE_ENUM {
  IDLE,
  FADE_IN,
  FADE_OUT,
}

export const DEFALT_DURATION = 2000

@ccclass('DrawManager')
export class DrawManager extends Component {
  private ctx: Graphics
  private state: FADE_STATE_ENUM = FADE_STATE_ENUM.IDLE
  private oldTime: number = 0
  private duration: number = 0
  private fadeResolve: (value: PromiseLike<null>) => void
  private block: BlockInputEvents
  private loadingLabel: Label = null

  init() {
    this.ctx = this.addComponent(Graphics)
    this.block = this.addComponent(BlockInputEvents)
    const transform = this.getComponent(UITransform)
    if (transform) {
      transform.anchorX = 0.5
      transform.anchorY = 0.5
      const size = view.getVisibleSize()
      transform.width = size.width
      transform.height = size.height
    }

    // 建立 Loading Label 節點
    const labelNode = new Node('LoadingLabel')
    labelNode.setParent(this.node)
    labelNode.layer = this.node.layer
    this.loadingLabel = labelNode.addComponent(Label)
    this.loadingLabel.string = 'Loading...'
    this.loadingLabel.fontSize = 50
    this.loadingLabel.lineHeight = 50
    this.loadingLabel.color = Color.WHITE
    this.loadingLabel.horizontalAlign = 1 // 居中對齊
    this.loadingLabel.verticalAlign = 1 // 居中對齊

    const labelTransform = labelNode.getComponent(UITransform)
    if (labelTransform) {
      labelTransform.anchorX = 0.5
      labelTransform.anchorY = 0.5
    }

    labelNode.active = false

    this.setAlpha(1)
  }

  setAlpha(percent: number) {
    this.ctx.clear()
    const size = view.getVisibleSize()
    const width = size.width * 2
    const height = size.height * 2
    this.ctx.rect(-width / 2, -height / 2, width, height)
    this.ctx.fillColor = new Color(0, 0, 0, 255 * percent)
    this.ctx.fill()

    this.block.enabled = percent === 1
  }

  update(dt: number) {
    if (this.loadingLabel && this.loadingLabel.node.active) {
      const scene = director.getScene()
      if (scene) {
        const canvas = scene.getComponentInChildren(Canvas)
        if (canvas) {
          this.loadingLabel.node.setWorldPosition(canvas.node.worldPosition)
        } else {
          this.loadingLabel.node.setWorldPosition(0, 0, 0)
        }
      }
    }

    const percent = (game.totalTime - this.oldTime) / this.duration
    switch (this.state) {
      case FADE_STATE_ENUM.FADE_IN:
        if (percent < 1) {
          this.setAlpha(percent)
        } else {
          this.setAlpha(1)
          this.state = FADE_STATE_ENUM.IDLE
          if (this.loadingLabel) {
            this.loadingLabel.node.active = true // 顯示 Loading
          }
          this.fadeResolve(null)
        }
        break
      case FADE_STATE_ENUM.FADE_OUT:
        if (percent < 1) {
          this.setAlpha(1 - percent)
        } else {
          this.setAlpha(0)
          this.state = FADE_STATE_ENUM.IDLE
          this.fadeResolve(null)
        }
        break
    }
  }

  fadeIn(duration: number = DEFALT_DURATION) {
    if (this.loadingLabel) {
      this.loadingLabel.node.active = false
    }
    this.setAlpha(0)
    this.duration = duration
    this.oldTime = game.totalTime
    this.state = FADE_STATE_ENUM.FADE_IN
    return new Promise<null>(resolve => {
      this.fadeResolve = resolve
    })
  }

  fadeOut(duration: number = DEFALT_DURATION) {
    if (this.loadingLabel) {
      this.loadingLabel.node.active = false // 隱藏 Loading
    }
    this.setAlpha(1)
    this.duration = duration
    this.oldTime = game.totalTime
    this.state = FADE_STATE_ENUM.FADE_OUT
    return new Promise<null>(resolve => {
      this.fadeResolve = resolve
    })
  }
}
