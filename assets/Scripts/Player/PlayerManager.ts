import { _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc'
import { TILE_HEIGHT, TILE_WIDTH } from '../Tile/TileManager'
import ResourceManager from '../../Runtime/ResourceManager'
import { CONTROLLER_ENUM, Event_ENUM } from '../../Enums'
import EventManager from '../../Runtime/EventManager'
const { ccclass, property } = _decorator

const ANIMATION_SPEED = 1 / 8

@ccclass('PlayerManager')
export class PlayerManager extends Component {
  x: number = 0
  y: number = 0
  targetX: number = 0
  targetY: number = 0
  private readonly speed = 1 / 10

  async init() {
    await this.render()

    EventManager.Instance.on(Event_ENUM.PLAYER_CTRL, this.move, this)
  }

  update(deltaTime: number) {
    this.updateXY()
    this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
  }

  updateXY() {
    if (this.targetX < this.x) {
      this.x -= this.speed
    } else if (this.targetX > this.x) {
      this.x += this.speed
    }
    if (this.targetY < this.y) {
      this.y -= this.speed
    } else if (this.targetY > this.y) {
      this.y += this.speed
    }

    if (Math.abs(this.targetX - this.x) < 0.1 && Math.abs(this.targetY - this.y) < 0.1) {
      this.x = this.targetX
      this.y = this.targetY
    }
  }

  move(inputDirection: CONTROLLER_ENUM) {
    if (inputDirection === CONTROLLER_ENUM.TOP) {
      this.targetY += 1
    }
    if (inputDirection === CONTROLLER_ENUM.BOTTOM) {
      this.targetY -= 1
    }
    if (inputDirection === CONTROLLER_ENUM.LEFT) {
      this.targetX -= 1
    }
    if (inputDirection === CONTROLLER_ENUM.RIGHT) {
      this.targetX += 1
    }
  }
  async render() {
    const sprite = this.addComponent(Sprite)
    sprite.sizeMode = Sprite.SizeMode.CUSTOM
    const transform = this.getComponent(UITransform)
    transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4)

    const spriteFrames = await ResourceManager.Instance.loadDir('texture/player/idle/top')
    const animationComponent = this.addComponent(Animation)

    const animationClip = new AnimationClip()
    animationClip.duration = 1.0 // 整个动画剪辑的周期

    const track = new animation.ObjectTrack() // 创建一个向量轨道
    track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame') // 指定轨道路径，即指定目标对象为 "Foo" 子节点的 "position" 属性
    const frames: [number, SpriteFrame][] = spriteFrames.map((item, index) => {
      return [index * ANIMATION_SPEED, item]
    })

    track.channel.curve.assignSorted(frames)
    // 最后将轨道添加到动画剪辑以应用
    animationClip.addTrack(track)

    animationClip.wrapMode = AnimationClip.WrapMode.Loop
    animationClip.duration = frames.length * ANIMATION_SPEED
    animationComponent.defaultClip = animationClip
    animationComponent.play()
  }
}
