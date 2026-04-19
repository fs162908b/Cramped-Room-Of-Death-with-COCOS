import { _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc'
import { TILE_HEIGHT, TILE_WIDTH } from '../Tile/TileManager'
import ResourceManager from '../../Runtime/ResourceManager'
const { ccclass, property } = _decorator

const ANIMATION_SPEED = 1 / 8

@ccclass('PlayerManager')
export class PlayerManager extends Component {
  async init() {
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
