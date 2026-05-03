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
  }
}
