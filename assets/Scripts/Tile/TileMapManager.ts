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
    for (let i = 0; i < mapInfo.length; i++) {
      const column = mapInfo[i]
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
        tileManager.init(spriteFrame, i, j)

        node.setParent(this.node)
      }
    }
  }
}
