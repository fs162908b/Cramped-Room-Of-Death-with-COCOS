import { _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc'
import {
  CONTROLLER_ENUM,
  DIRECTION_ENUM,
  DIRECTION_ORDER_ENUM,
  ENTITY_STATE_ENUM,
  ENTITY_TYPE_ENUM,
  Event_ENUM,
  PARAMS_NAME_ENUM,
} from 'db://assets/Enums'
import EventManager from 'db://assets/Runtime/EventManager'
import { IEntity } from 'db://assets/Levels'
import { PlayerStateMachine } from 'db://assets/Scripts/Player/PlayerStateMachine'
import { TILE_HEIGHT, TILE_WIDTH } from 'db://assets/Scripts/Tile/TileManager'
import DataManager from 'db://assets/Runtime/DataManager'
const { ccclass, property } = _decorator

@ccclass('EntityManager')
export class EntityManager extends Component {
  x: number = 0
  y: number = 0
  fsm: PlayerStateMachine

  private _direction: DIRECTION_ENUM
  private _state: ENTITY_STATE_ENUM
  private type: ENTITY_TYPE_ENUM

  get direction() {
    return this._direction
  }

  set direction(value: DIRECTION_ENUM) {
    this._direction = value
    this.fsm.setParams(PARAMS_NAME_ENUM.DIRECTION, DIRECTION_ORDER_ENUM[value])
  }

  get state() {
    return this._state
  }

  set state(value: ENTITY_STATE_ENUM) {
    this._state = value
    this.fsm.setParams(value, true)
  }

  async init(params: IEntity) {
    const sprite = this.addComponent(Sprite)
    sprite.sizeMode = Sprite.SizeMode.CUSTOM
    const transform = this.getComponent(UITransform)
    transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4)

    this.x = params.x
    this.y = params.y
    this.direction = params.direction
    this.state = params.state
    this.type = params.type
  }

  update() {
    this.node.setPosition(
      this.x * TILE_WIDTH - TILE_WIDTH * 1.5,
      -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5,
    )
  }
}
