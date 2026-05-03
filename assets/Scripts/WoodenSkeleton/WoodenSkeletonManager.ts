import { _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc'
import { CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, Event_ENUM } from 'db://assets/Enums'
import EventManager from 'db://assets/Runtime/EventManager'
import { PlayerStateMachine } from 'db://assets/Scripts/Player/PlayerStateMachine'
import { EntityManager } from 'db://assets/Base/EntityManager'
import DataManager from 'db://assets/Runtime/DataManager'
import { WoodenSkeletonStateMachine } from './WoodenSkeletonStateMachine'
const { ccclass, property } = _decorator

@ccclass('WoodenSkeletonManager')
export class WoodenSkeletonManager extends EntityManager {
  async init() {
    // await this.render()
    this.fsm = this.addComponent(WoodenSkeletonStateMachine)
    await this.fsm.init()
    super.init({
      x: 7,
      y: 7,
      type: ENTITY_TYPE_ENUM.PLAYER,
      direction: DIRECTION_ENUM.TOP,
      state: ENTITY_STATE_ENUM.IDLE,
    })

    EventManager.Instance.on(Event_ENUM.PLAYER_MOVE_END, this.onChangeDirection, this)
    EventManager.Instance.on(Event_ENUM.PLAYER_BORN, this.onChangeDirection, this)
  }

  onChangeDirection(isInited: boolean = false) {
    if (!DataManager.Instance.player) return
    const { x: playerX, y: playerY } = DataManager.Instance.player
    const disX = Math.abs(this.x - playerX)
    const disY = Math.abs(this.y - playerY)

    if (disX === disY && !isInited) {
      return
    }

    if (playerX >= this.x && playerY <= this.y) {
      this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.RIGHT
    } else if (playerX <= this.x && playerY <= this.y) {
      this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.LEFT
    } else if (playerX <= this.x && playerY > this.y) {
      this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.LEFT
    } else if (playerX >= this.x && playerY > this.y) {
      this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.RIGHT
    }
  }
}
