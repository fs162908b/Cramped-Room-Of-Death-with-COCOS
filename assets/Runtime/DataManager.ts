import Singleton from 'db://assets/Base/Singleton'
import { ILevel } from 'db://assets/Levels'
import { TileManager } from 'db://assets/Scripts/Tile/TileManager'
import { PlayerManager } from '../Scripts/Player/PlayerManager'
import { WoodenSkeletonManager } from '../Scripts/WoodenSkeleton/WoodenSkeletonManager'

export default class DataManager extends Singleton {
  static get Instance() {
    return super.GetInstance<DataManager>()
  }

  mapInfo: ILevel['mapInfo']
  tileInfo: Array<Array<TileManager>> = []
  mapRowCount: number = 0
  mapColCount: number = 0
  levelIndex: number = 1
  player: PlayerManager
  enermies: WoodenSkeletonManager[] = []

  reset() {
    this.mapInfo = []
    this.mapRowCount = 0
    this.mapColCount = 0
    this.tileInfo = []
    this.player = null
  }
}
