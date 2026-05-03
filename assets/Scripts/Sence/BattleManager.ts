import { _decorator, Component, Node } from 'cc'
import { TileMapManager } from '../Tile/TileMapManager'
import { createUINode } from '../../Utils'
import Levels, { ILevel } from '../../Levels'
import DataManager from '../../Runtime/DataManager'
import { TILE_WIDTH, TILE_HEIGHT } from '../Tile/TileManager'
import { Event_ENUM } from '../../Enums'
import EventManager from '../../Runtime/EventManager'
import { PlayerManager } from '../Player/PlayerManager'
import { WoodenSkeletonManager } from '../WoodenSkeleton/WoodenSkeletonManager'
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
      this.generateEnemies()
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

  async generateTileMap() {
    const tileMap = createUINode()
    await tileMap.setParent(this.stage)
    const tileMapManager = tileMap.addComponent(TileMapManager)
    tileMapManager.init()

    this.adapPos()
  }
  async generatePlayer() {
    const player = createUINode()
    player.setParent(this.stage)
    const playerManager = player.addComponent(PlayerManager)
    await playerManager.init()
    DataManager.Instance.player = playerManager
    EventManager.Instance.emit(Event_ENUM.PLAYER_BORN, true)
  }

  async generateEnemies() {
    const enemy = createUINode()
    enemy.setParent(this.stage)
    const woodenSkeletonManager = enemy.addComponent(WoodenSkeletonManager)
    await woodenSkeletonManager.init()
    DataManager.Instance.enermies.push(woodenSkeletonManager)
  }

  adapPos() {
    // 獲取地圖大小
    const { mapRowCount, mapColCount } = DataManager.Instance
    const disX = (TILE_WIDTH * mapRowCount) / 2
    const disY = (TILE_HEIGHT * mapColCount) / 2 + 80

    this.stage.setPosition(-disX, disY)
  }
}
