import { _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc'
import {
  CONTROLLER_ENUM,
  DIRECTION_ENUM,
  DIRECTION_ORDER_ENUM,
  ENTITY_STATE_ENUM,
  ENTITY_TYPE_ENUM,
  EVENT_ENUM,
  Event_ENUM,
  PARAMS_NAME_ENUM,
  SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM,
} from 'db://assets/Enums'
import EventManager from 'db://assets/Runtime/EventManager'
import { IEntity, ISpikes } from 'db://assets/Levels'
import { TILE_HEIGHT, TILE_WIDTH } from 'db://assets/Scripts/Tile/TileManager'
import { StateMachine } from 'db://assets/Base/StateMachine'
import { randomByLen } from 'db://assets/Utils'
import { SpikesStateMachine } from './SpikesStateMachine'
import DataManager from '../../Runtime/DataManager'
const { ccclass, property } = _decorator

@ccclass('SpikesManager')
export class SpikesManager extends Component {
  id: string = randomByLen(12)
  x: number = 0
  y: number = 0
  fsm: StateMachine

  private _count: number
  private _totalCount: number
  private type: ENTITY_TYPE_ENUM

  get count() {
    return this._count
  }

  set count(value: number) {
    this._count = value
    this.fsm.setParams(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT, value)
  }

  get totalCount() {
    return this._totalCount
  }

  set totalCount(value: number) {
    this._totalCount = value
    this.fsm.setParams(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT, value)
  }

  async init(params: ISpikes) {
    const sprite = this.addComponent(Sprite)
    sprite.sizeMode = Sprite.SizeMode.CUSTOM
    const transform = this.getComponent(UITransform)
    transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4)

    this.fsm = this.addComponent(SpikesStateMachine)
    await this.fsm.init()
    this.x = params.x
    this.y = params.y
    this.type = params.type
    this.totalCount = SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM[this.type]
    this.count = params.count

    EventManager.Instance.on(Event_ENUM.PLAYER_MOVE_END, this.onLoop, this)
  }

  update() {
    this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
  }

  backZero() {
    this.count = 0
  }

  onLoop() {
    if (this.count >= this.totalCount) {
      this.count = 1
    } else {
      this.count++
    }
    this.onAttack()
  }

  onDestroy() {
    EventManager.Instance.off(Event_ENUM.PLAYER_MOVE_END, this.onLoop)
  }

  onAttack() {
    const { x: playerX, y: playerY } = DataManager.Instance.player
    if (playerX === this.x && playerY === this.y && this.count === this.totalCount) {
      EventManager.Instance.emit(EVENT_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.DEATH)
    }
  }
}
