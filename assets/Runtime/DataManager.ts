import { ILevel } from '../Levels'
import Singleton from '../Base/Singleton'

export default class DataManager extends Singleton {
  static get Instance() {
    return super.GetInstance<DataManager>()
  }

  mapInfo: ILevel['mapInfo']
  mapRowCount: number
  mapColCount: number
}
