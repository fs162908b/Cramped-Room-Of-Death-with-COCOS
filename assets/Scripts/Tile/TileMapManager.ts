import { _decorator, Component, resources, SpriteFrame } from 'cc'
const { ccclass } = _decorator
import { TileManager } from './TileManager'
import { createUINode, randomByRange } from '../../Utils'
import DataManager from '../../Runtime/DataManager'
import ResourceManager from '../../Runtime/ResourceManager'

@ccclass('TileMapManager')
export class TileMapManager extends Component {
  async init() {
    const { mapInfo } = DataManager.Instance
    const spriteFrames = await ResourceManager.Instance.loadDir('texture/tile/tile')
    DataManager.Instance.tileInfo = []
    for (let i = 0; i < mapInfo.length; i++) {
      const column = mapInfo[i]
      DataManager.Instance.tileInfo[i] = []
      for (let j = 0; j < column.length; j++) {
        const item = column[j]
        if (item.src === null || item.type === null) {
          continue
        }

        const node = createUINode()

        let number = item.src
        if ((number === 1 || number === 5 || number === 9) && i % 2 === 0 && j % 2 === 0) {
          number += randomByRange(0, 4)
        }
        const imgSrc = `tile (${number})`
        const spriteFrame = spriteFrames.find(item => item.name === imgSrc) || spriteFrames[0]
        const tileManager = node.addComponent(TileManager)
        const type = item.type
        tileManager.init(type, spriteFrame, i, j)
        DataManager.Instance.tileInfo[i][j] = tileManager

        node.setParent(this.node)
      }
    }
  }
}
