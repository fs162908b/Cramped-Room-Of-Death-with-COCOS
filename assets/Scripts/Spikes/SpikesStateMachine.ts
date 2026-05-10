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
import {
  ENTITY_STATE_ENUM,
  ENTITY_TYPE_ENUM,
  FSM_PARAM_TYPE_ENUM,
  PARAMS_NAME_ENUM,
  SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM,
} from 'db://assets/Enums'
import { getInitParamsNumber, getInitParamsTrigger, StateMachine } from 'db://assets/Base/StateMachine'
import SpikesSubStateMachine from './SpikesSubStateMachine'
import SpikesOneSubStateMachine from './SpikesOneSubStateMachine'
import SpikesTwoSubStateMachine from './SpikesTwoSubStateMachine'
import SpikesThreeSubStateMachine from './SpikesThreeSubStateMachine'
import SpikesFourSubStateMachine from './SpikesFourSubStateMachine'
import { SpikesManager } from './SpikesManager'

const { ccclass, property } = _decorator

@ccclass('SpikesStateMachine')
export class SpikesStateMachine extends StateMachine {
  async init() {
    this.animationComponent = this.addComponent(Animation)
    this.initParams()
    this.initStateMachine()
    this.initAnimationEvent()
    await Promise.all(this.waitingList)
  }

  initParams() {
    this.params.set(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT, getInitParamsNumber())
    this.params.set(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT, getInitParamsNumber())
  }

  initStateMachine() {
    this.stateMachines.set(ENTITY_TYPE_ENUM.SPIKES_ONE, new SpikesOneSubStateMachine(this))
    this.stateMachines.set(ENTITY_TYPE_ENUM.SPIKES_TWO, new SpikesTwoSubStateMachine(this))
    this.stateMachines.set(ENTITY_TYPE_ENUM.SPIKES_THREE, new SpikesThreeSubStateMachine(this))
    this.stateMachines.set(ENTITY_TYPE_ENUM.SPIKES_FOUR, new SpikesFourSubStateMachine(this))
  }

  initAnimationEvent() {
    this.animationComponent.on(Animation.EventType.FINISHED, () => {
      const name = this.animationComponent.defaultClip.name
      const { value } = this.params.get(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT)
      //例如1个刺的地裂，在播放完1刺之后，回到0的状态
      if (
        (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE && name.includes('spikesone/two')) ||
        (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_TWO && name.includes('spikestwo/three')) ||
        (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_THREE && name.includes('spikesthree/four')) ||
        (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR && name.includes('spikesfour/five'))
      ) {
        this.node.getComponent(SpikesManager).backZero()
      }
      // const whiteList = ['attack']
      // if (whiteList.some(item => name.includes(item))) {
      //   this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE
      // }
    })
  }
  run() {
    const { value } = this.params.get(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT)
    switch (this.currentState) {
      case this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_ONE):
      case this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_TWO):
      case this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_THREE):
      case this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_FOUR):
        if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE) {
          this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_ONE)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_TWO) {
          this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_TWO)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_THREE) {
          this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_THREE)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR) {
          this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_FOUR)
        } else {
          this.currentState = this.currentState
        }
        break
      default:
        if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE) {
          this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_ONE)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_TWO) {
          this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_TWO)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_THREE) {
          this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_THREE)
        } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR) {
          this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_FOUR)
        }
    }
  }
}
