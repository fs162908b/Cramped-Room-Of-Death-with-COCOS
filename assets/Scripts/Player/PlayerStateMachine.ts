import {
  _decorator,
  AnimationClip,
  Component,
  Layers,
  Node,
  resources,
  Sprite,
  SpriteFrame,
  UITransform,
  Animation,
} from 'cc'
import { FSM_PARAM_TYPE_ENUM, PARAME_NAME_ENUM } from '../../Enums'
import State from '../../Base/State'
const { ccclass, property } = _decorator

type ParamsValueType = boolean | number

export interface IParamsValue {
  type: FSM_PARAM_TYPE_ENUM
  value: ParamsValueType
}

export const getInitParamsTrigger = () => {
  return {
    type: FSM_PARAM_TYPE_ENUM.TRIGGER,
    value: false,
  }
}

@ccclass('PlayerStateMachine')
export class PlayerStateMachine extends Component {
  private _currentState: State = null

  params: Map<string, IParamsValue> = new Map()
  stateMachines: Map<string, State> = new Map()
  animationComponent: Animation
  waitingList: Array<Promise<SpriteFrame[]>> = []

  getParams(paramsName: string) {
    if (this.params.has(paramsName)) {
      return this.params.get(paramsName)
    }
  }

  setParams(paramsName: string, value: ParamsValueType) {
    if (this.params.has(paramsName)) {
      this.params.get(paramsName).value = value
      this.run()
    }
  }

  getState(key: string) {
    return this.stateMachines.get(key)
  }

  setState(key: string, value: State) {
    this.stateMachines.set(key, value)
  }

  get currentState() {
    return this._currentState
  }

  set currentState(newState: State) {
    this._currentState = newState
    this._currentState.run()
  }

  async init() {
    this.animationComponent = this.addComponent(Animation)
    this.initParams()
    this.initStateMachine()
    await Promise.all(this.waitingList)
  }

  initParams() {
    this.params.set(PARAME_NAME_ENUM.IDLE, getInitParamsTrigger())
    this.params.set(PARAME_NAME_ENUM.TURNLEFT, getInitParamsTrigger())
  }

  initStateMachine() {
    this.stateMachines.set(
      PARAME_NAME_ENUM.IDLE,
      new State(this, 'texture/player/idle/top', AnimationClip.WrapMode.Loop),
    )
    this.stateMachines.set(PARAME_NAME_ENUM.TURNLEFT, new State(this, 'texture/player/turnleft/top'))
  }

  run() {
    switch (this.currentState) {
      case this.stateMachines.get(PARAME_NAME_ENUM.IDLE):
      case this.stateMachines.get(PARAME_NAME_ENUM.TURNLEFT):
        if (this.params.get(PARAME_NAME_ENUM.TURNLEFT).value) {
          this.currentState = this.stateMachines.get(PARAME_NAME_ENUM.TURNLEFT)
        } else if (this.params.get(PARAME_NAME_ENUM.IDLE).value) {
          this.currentState = this.stateMachines.get(PARAME_NAME_ENUM.IDLE)
        }
        break
      default:
        this.currentState = this.stateMachines.get(PARAME_NAME_ENUM.IDLE)
    }
  }
}
