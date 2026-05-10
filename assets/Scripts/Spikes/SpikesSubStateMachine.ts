import { StateMachine } from '../../Base/StateMachine'
import { SubStateMachine } from '../../Base/SubStateMachine'
import { PARAMS_NAME_ENUM, SPIKES_COUNT_MAP_NUMBER_ENUM } from '../../Enums'
import State from '../../Base/State'

export default class SpikesSubStateMachine extends SubStateMachine {
  constructor(fsm: StateMachine, baseUrl: string, totalCount: number) {
    super(fsm)
    for (let i = 0; i <= totalCount; i++) {
      const stateKey = SPIKES_COUNT_MAP_NUMBER_ENUM[i]
      this.stateMachines.set(stateKey, new State(fsm, `${baseUrl}${stateKey.toLowerCase()}`))
    }
  }

  run() {
    const { value } = this.fsm.params.get(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT)
    this.currentState = this.stateMachines.get(SPIKES_COUNT_MAP_NUMBER_ENUM[value as number])
  }
}
