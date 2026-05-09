import { _decorator } from 'cc'
import { IronSkeletonStateMachine } from './IronSkeletonStateMachine'
import { EnemyManager } from 'db://assets/Base/EnemyManager'
import { IEntity } from 'db://assets/Levels'
const { ccclass } = _decorator

@ccclass('IronSkeletonManager')
export class IronSkeletonManager extends EnemyManager {
  async init(params: IEntity) {
    this.fsm = this.addComponent(IronSkeletonStateMachine)
    await this.fsm.init()
    super.init(params)
  }
}
