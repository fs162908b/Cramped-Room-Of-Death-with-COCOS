 import { _decorator } from 'cc'
import { SmokeStateMachine } from './SmokeStateMachine'
import { EnemyManager } from 'db://assets/Base/EnemyManager'
import { IEntity } from 'db://assets/Levels'
import { EntityManager } from '../../Base/EntityManager'
const { ccclass } = _decorator

@ccclass('SmokeManager')
export class SmokeManager extends EntityManager {
  async init(params: IEntity) {
    this.fsm = this.addComponent(SmokeStateMachine)
    await this.fsm.init()
    super.init(params)
  }
}
