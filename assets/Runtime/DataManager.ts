import { ILevel } from '../Levels'
import Singleton from '../Base/Singleton'

export default class DataManager extends Singleton {
  static get Instance() {
    return super.GetInstance<DataManager>()
  }

  mapInfo: ILevel['mapInfo']
  mapRowCount: number = 0
  mapColCount: number = 0
  levelIndex: number = 1

  reset() {
    this.mapInfo = []
    this.mapRowCount = 0
    this.mapColCount = 0
  }
}
