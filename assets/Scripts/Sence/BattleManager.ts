import { _decorator, Component, Node } from 'cc'
import { TileMapManager } from '../Tile/TileMapManager'
import { createUINode } from '../../Utils'
import Levels, { ILevel } from '../../Levels'
import DataManager from '../../Runtime/DataManager'
import { TILE_WIDTH, TILE_HEIGHT } from '../Tile/TileManager'
const { ccclass, property } = _decorator

@ccclass('BattleManager')
export class BattleManager extends Component {
  level: ILevel
  stage: Node
  start() {
    this.generateStage()
    this.initLevel()
  }

  initLevel() {
    const level = Levels[`level${1}`]
    if (!level) {
      return
    }
    this.level = level

    DataManager.Instance.mapInfo = this.level.mapInfo
    DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0
    DataManager.Instance.mapColCount = this.level.mapInfo[0].length || 0

    this.generateTileMap()
  }

  generateStage() {
    this.stage = createUINode()
    this.stage.setParent(this.node)
  }

  generateTileMap() {
    const tileMap = createUINode()
    tileMap.setParent(this.stage)
    const tileMapManager = tileMap.addComponent(TileMapManager)
    tileMapManager.init()

    this.adapPos()
  }

  adapPos() {
    // 獲取地圖大小
    const { mapRowCount, mapColCount } = DataManager.Instance
    const disX = (TILE_WIDTH * mapColCount) / 2
    const disY = (TILE_HEIGHT * mapRowCount) / 2 + 80

    this.stage.setPosition(-disX, disY)
  }
}
