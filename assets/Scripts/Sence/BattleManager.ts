import { _decorator, Component, Node } from 'cc'
import { TileMapManager } from '../Tile/TileMapManager'
import { createUINode } from '../../Utils'
import Levels, { ILevel } from '../../Levels'
import DataManager from '../../Runtime/DataManager'
import { TILE_WIDTH, TILE_HEIGHT } from '../Tile/TileManager'
import { Event_ENUM } from '../../Enums'
import EventManager from '../../Runtime/EventManager'
import { PlayerManager } from '../Player/PlayerManager'
const { ccclass, property } = _decorator

@ccclass('BattleManager')
export class BattleManager extends Component {
  level: ILevel
  stage: Node

  start() {
    this.generateStage()
    this.initLevel()
  }

  protected onLoad(): void {
    EventManager.Instance.on(Event_ENUM.NEXT_LEVEL, this.nextLevel, this)
  }

  protected onDestroy(): void {
    EventManager.Instance.off(Event_ENUM.NEXT_LEVEL, this.nextLevel)
  }

  initLevel() {
    const level = Levels[`level${DataManager.Instance.levelIndex}`]
    if (level) {
      this.clearLevel()
      this.level = level

      DataManager.Instance.mapInfo = this.level.mapInfo
      DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0
      DataManager.Instance.mapColCount = this.level.mapInfo[0].length || 0

      this.generateTileMap()
      this.generatePlayer()
    }
  }

  nextLevel() {
    DataManager.Instance.levelIndex++
    this.initLevel()
  }

  clearLevel() {
    this.stage.destroyAllChildren()
    DataManager.Instance.reset()
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
  generatePlayer() {
    const player = createUINode()
    player.setParent(this.stage)
    const playerManager = player.addComponent(PlayerManager)
    playerManager.init()
  }
  adapPos() {
    // 獲取地圖大小
    const { mapRowCount, mapColCount } = DataManager.Instance
    const disX = (TILE_WIDTH * mapColCount) / 2
    const disY = (TILE_HEIGHT * mapRowCount) / 2 + 80

    this.stage.setPosition(-disX, disY)
  }
}
