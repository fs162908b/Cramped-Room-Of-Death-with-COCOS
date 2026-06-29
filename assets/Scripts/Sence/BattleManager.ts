import { _decorator, Component, Node } from 'cc'
import { TileMapManager } from '../Tile/TileMapManager'
import { createUINode } from '../../Utils'
import Levels, { ILevel } from '../../Levels'
import DataManager from '../../Runtime/DataManager'
import { TILE_WIDTH, TILE_HEIGHT } from '../Tile/TileManager'
import {
  DIRECTION_ENUM,
  ENTITY_STATE_ENUM,
  ENTITY_TYPE_ENUM,
  EVENT_ENUM,
  Event_ENUM,
  SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM,
} from 'db://assets/Enums'
import EventManager from '../../Runtime/EventManager'
import { PlayerManager } from '../Player/PlayerManager'
import { WoodenSkeletonManager } from '../WoodenSkeleton/WoodenSkeletonManager'
import { DoorManager } from '../Door/DoorManager'
import { IronSkeletonManager } from '../IronSkeleton/IronSkeletonManager'
import { BurstManager } from '../Burst/BurstManager'
import { SpikesManager } from '../Spikes/SpikesManager'
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
    DataManager.Instance.levelIndex = 1;
    EventManager.Instance.on(Event_ENUM.NEXT_LEVEL, this.nextLevel, this)
    EventManager.Instance.on(Event_ENUM.PLAYER_MOVE_END, this.checkArrived, this)

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
      this.generateBurst()
      this.generateDoor()
      this.generateSpikes()
      this.generateEnemies()
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
    await playerManager.init(this.level.player)
    DataManager.Instance.player = playerManager
    EventManager.Instance.emit(Event_ENUM.PLAYER_BORN, true)
  }

  async generateEnemies() {
    const promise = [];
    for(let i = 0; i < this.level.enemies.length; i++){
      const enemy = this.level.enemies[i];
      const node = createUINode()
      node.setParent(this.stage)
      const Manager = enemy.type === ENTITY_TYPE_ENUM.SKELETON_WOODEN ? WoodenSkeletonManager : IronSkeletonManager;
      const manager = node.addComponent(Manager)
      promise.push(manager.init(enemy));
      DataManager.Instance.enermies.push(manager)
    }

    await Promise.all(promise);

  }

  async generateDoor() {
    const door = createUINode()
    door.setParent(this.stage)
    const doorManager = door.addComponent(DoorManager)
    await doorManager.init(this.level.door);
    DataManager.Instance.door = doorManager
  }

  async generateBurst() {
    const promise = [];
    for(let i = 0; i < this.level.bursts.length; i++){
      const bursts = this.level.bursts[i];
      const node = createUINode()
      node.setParent(this.stage)
      const burstManager = node.addComponent(BurstManager)
      promise.push(burstManager.init(bursts));
      DataManager.Instance.bursts.push(burstManager)
    }

    await Promise.all(promise);
  }

  async generateSpikes() {
    const promise = [];
    for(let i = 0; i < this.level.spikes.length; i++){
      const spikes = this.level.spikes[i];
      const node = createUINode()
      node.setParent(this.stage)
      const spikestManager = node.addComponent(SpikesManager)
      promise.push(spikestManager.init(spikes));
      DataManager.Instance.spikes.push(spikestManager)
    }

    await Promise.all(promise);
  }

  checkArrived(){
    const {x:playerX, y: playerY} = DataManager.Instance.player;
    const {x:doorX, y: doorY, state:doorState} = DataManager.Instance.door
    if(playerX === doorX && playerY === doorY && doorState === ENTITY_STATE_ENUM.DEATH){
      EventManager.Instance.emit(EVENT_ENUM.NEXT_LEVEL);
    }
  }

  adapPos() {
    // 獲取地圖大小
    const { mapRowCount, mapColCount } = DataManager.Instance
    const disX = (TILE_WIDTH * mapRowCount) / 2
    const disY = (TILE_HEIGHT * mapColCount) / 2 + 80

    this.stage.setPosition(-disX, disY)
  }
}
