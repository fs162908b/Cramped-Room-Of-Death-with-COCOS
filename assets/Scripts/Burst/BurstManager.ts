import { _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc'
import { CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, Event_ENUM } from 'db://assets/Enums'
import EventManager from 'db://assets/Runtime/EventManager'
import DataManager from 'db://assets/Runtime/DataManager'
import { EntityManager } from 'db://assets/Base/EntityManager'
import { IEntity } from 'db://assets/Levels'
import { BurstStateMachine } from './BurstStateMachine'
import { TILE_HEIGHT, TILE_WIDTH } from '../Tile/TileManager'
const { ccclass, property } = _decorator

@ccclass('BurstManager')
export class BurstManager extends EntityManager {
  async init(params: IEntity) {
    this.fsm = this.addComponent(BurstStateMachine)
    await this.fsm.init()
    super.init(params)
    const transform = this.node.getComponent(UITransform)
    transform.setContentSize(TILE_WIDTH, TILE_HEIGHT)

    EventManager.Instance.on(Event_ENUM.PLAYER_MOVE_END, this.onBurst, this)
  }

  onDestroy(): void {
    super.onDestroy()
    EventManager.Instance.off(Event_ENUM.PLAYER_MOVE_END, this.onBurst)
  }

  update() {
    this.node.setPosition(this.x * TILE_WIDTH, -this.y * TILE_HEIGHT)
  }

  onBurst() {
    if (this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player) return

    const { x: playerX, y: playerY, state: playerState } = DataManager.Instance.player
    if (this.x === playerX && this.y === playerY && this.state === ENTITY_STATE_ENUM.IDLE) {
      this.state = ENTITY_STATE_ENUM.ATTACK
    } else if (this.state === ENTITY_STATE_ENUM.ATTACK) {
      this.state = ENTITY_STATE_ENUM.DEATH
      if (this.x === playerX && this.y === playerY) {
        EventManager.Instance.emit(Event_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.AIRDEATH)
      }
    }
  }
}
