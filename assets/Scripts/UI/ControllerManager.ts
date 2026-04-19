import { _decorator, Component, Node } from 'cc'
import EventManager from '../../Runtime/EventManager'
import { Event_ENUM } from '../../Enums'
const { ccclass, property } = _decorator

@ccclass('ControllerManager')
export class ControllerManager extends Component {
  handleCtrl() {
    EventManager.Instance.emit(Event_ENUM.NEXT_LEVEL)
  }
}
