import { _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc'
import { CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, Event_ENUM } from 'db://assets/Enums'
import EventManager from 'db://assets/Runtime/EventManager'
import { PlayerStateMachine } from 'db://assets/Scripts/Player/PlayerStateMachine'
import { EntityManager } from 'db://assets/Base/EntityManager'
import DataManager from 'db://assets/Runtime/DataManager'
import { IEntity } from '../../Levels'
const { ccclass, property } = _decorator

@ccclass('PlayerManager')
export class PlayerManager extends EntityManager {
  targetX: number = 0
  targetY: number = 0
  isMoving: boolean = false
  private readonly speed = 1 / 10

  async init(params: IEntity) {
    // await this.render()
    this.fsm = this.addComponent(PlayerStateMachine)
    await this.fsm.init()
    super.init(params)
    this.targetX = this.x
    this.targetY = this.y
    EventManager.Instance.on(Event_ENUM.PLAYER_CTRL, this.inputHandle, this)
    EventManager.Instance.on(Event_ENUM.ATTACK_PLAYER, this.onDead, this)
  }

  update() {
    this.updateXY()
    super.update()
  }

  updateXY() {
    if (this.targetX < this.x) {
      this.x -= this.speed
    } else if (this.targetX > this.x) {
      this.x += this.speed
    }
    if (this.targetY < this.y) {
      this.y -= this.speed
    } else if (this.targetY > this.y) {
      this.y += this.speed
    }

    if (Math.abs(this.targetX - this.x) < 0.1 && Math.abs(this.targetY - this.y) < 0.1 && this.isMoving) {
      this.isMoving = false
      this.x = this.targetX
      this.y = this.targetY
      EventManager.Instance.emit(Event_ENUM.PLAYER_MOVE_END)
    }
  }

  onDead(type: ENTITY_STATE_ENUM) {
    this.state = type
  }

  inputHandle(inputDirection: CONTROLLER_ENUM) {
    if (
      this.state === ENTITY_STATE_ENUM.DEATH ||
      this.state === ENTITY_STATE_ENUM.AIRDEATH ||
      this.state === ENTITY_STATE_ENUM.ATTACK ||
      this.isMoving
    )
      return
    if (this.willBlock(inputDirection)) {
      return
    }
    const id = this.willAttack(inputDirection)
    if (id) {
      EventManager.Instance.emit(Event_ENUM.ATTACK_ENEMY, id)
      EventManager.Instance.emit(Event_ENUM.DOOR_OPEN)
      return
    }
    this.move(inputDirection)
  }

  move(inputDirection: CONTROLLER_ENUM) {
    if (inputDirection === CONTROLLER_ENUM.TOP) {
      this.targetY -= 1
      this.isMoving = true
    } else if (inputDirection === CONTROLLER_ENUM.BOTTOM) {
      this.targetY += 1
      this.isMoving = true
    } else if (inputDirection === CONTROLLER_ENUM.LEFT) {
      this.targetX -= 1
      this.isMoving = true
    } else if (inputDirection === CONTROLLER_ENUM.RIGHT) {
      this.targetX += 1
      this.isMoving = true
    } else if (inputDirection === CONTROLLER_ENUM.TURNLEFT) {
      if (this.direction == DIRECTION_ENUM.TOP) {
        this.direction = DIRECTION_ENUM.LEFT
      } else if (this.direction == DIRECTION_ENUM.LEFT) {
        this.direction = DIRECTION_ENUM.BOTTOM
      } else if (this.direction == DIRECTION_ENUM.BOTTOM) {
        this.direction = DIRECTION_ENUM.RIGHT
      } else if (this.direction == DIRECTION_ENUM.RIGHT) {
        this.direction = DIRECTION_ENUM.TOP
      }
      this.state = ENTITY_STATE_ENUM.TURNLEFT
      EventManager.Instance.emit(Event_ENUM.PLAYER_MOVE_END)
    } else if (inputDirection === CONTROLLER_ENUM.TURNRIGHT) {
      if (this.direction == DIRECTION_ENUM.TOP) {
        this.direction = DIRECTION_ENUM.RIGHT
      } else if (this.direction == DIRECTION_ENUM.RIGHT) {
        this.direction = DIRECTION_ENUM.BOTTOM
      } else if (this.direction == DIRECTION_ENUM.BOTTOM) {
        this.direction = DIRECTION_ENUM.LEFT
      } else if (this.direction == DIRECTION_ENUM.LEFT) {
        this.direction = DIRECTION_ENUM.TOP
      }
      this.state = ENTITY_STATE_ENUM.TURNRIGHT
      EventManager.Instance.emit(Event_ENUM.PLAYER_MOVE_END)
    }
  }

  willAttack(type: CONTROLLER_ENUM) {
    const enermies = DataManager.Instance.enermies.filter(enemy => enemy.state !== ENTITY_STATE_ENUM.DEATH)

    for (let i = 0; i < enermies.length; i++) {
      const { x: enemyX, y: enemyY, id: enemyId } = enermies[i]
      if (
        type === CONTROLLER_ENUM.TOP &&
        this.direction === DIRECTION_ENUM.TOP &&
        enemyX === this.x &&
        enemyY === this.targetY - 2
      ) {
        this.state = ENTITY_STATE_ENUM.ATTACK
        return enemyId
      } else if (
        type === CONTROLLER_ENUM.LEFT &&
        this.direction === DIRECTION_ENUM.LEFT &&
        enemyX === this.x - 2 &&
        enemyY === this.targetY
      ) {
        this.state = ENTITY_STATE_ENUM.ATTACK
        return enemyId
      } else if (
        type === CONTROLLER_ENUM.BOTTOM &&
        this.direction === DIRECTION_ENUM.BOTTOM &&
        enemyX === this.x &&
        enemyY === this.targetY + 2
      ) {
        this.state = ENTITY_STATE_ENUM.ATTACK
        return enemyId
      } else if (
        type === CONTROLLER_ENUM.RIGHT &&
        this.direction === DIRECTION_ENUM.RIGHT &&
        enemyX === this.x + 2 &&
        enemyY === this.targetY
      ) {
        this.state = ENTITY_STATE_ENUM.ATTACK
        return enemyId
      }
    }
    return ''
  }

  willBlock(inputDirection: CONTROLLER_ENUM) {
    const { targetX: x, targetY: y, direction } = this
    const { tileInfo } = DataManager.Instance

    if (inputDirection === CONTROLLER_ENUM.TOP) {
      const playerNextX = x
      const playerNextY = y - 1
      const weaponNextX = direction === DIRECTION_ENUM.LEFT ? x - 1 : direction === DIRECTION_ENUM.RIGHT ? x + 1 : x
      const weaponNextY =
        direction === DIRECTION_ENUM.TOP ? y - 2 : direction === DIRECTION_ENUM.BOTTOM ? y : playerNextY

      if (this.checkBlock(playerNextX, playerNextY, weaponNextX, weaponNextY)) return true
    } else if (inputDirection === CONTROLLER_ENUM.BOTTOM) {
      const playerNextX = x
      const playerNextY = y + 1
      const weaponNextX = direction === DIRECTION_ENUM.LEFT ? x - 1 : direction === DIRECTION_ENUM.RIGHT ? x + 1 : x
      const weaponNextY =
        direction === DIRECTION_ENUM.TOP ? y - 1 : direction === DIRECTION_ENUM.BOTTOM ? y + 2 : playerNextY

      if (this.checkBlock(playerNextX, playerNextY, weaponNextX, weaponNextY)) return true
    } else if (inputDirection === CONTROLLER_ENUM.LEFT) {
      const playerNextX = x - 1
      const playerNextY = y
      const weaponNextX =
        direction === DIRECTION_ENUM.LEFT ? x - 2 : direction === DIRECTION_ENUM.RIGHT ? x : playerNextX
      const weaponNextY = direction === DIRECTION_ENUM.TOP ? y - 1 : direction === DIRECTION_ENUM.BOTTOM ? y + 1 : y

      if (this.checkBlock(playerNextX, playerNextY, weaponNextX, weaponNextY)) return true
    } else if (inputDirection === CONTROLLER_ENUM.RIGHT) {
      const playerNextX = x + 1
      const playerNextY = y
      const weaponNextX =
        direction === DIRECTION_ENUM.LEFT ? x : direction === DIRECTION_ENUM.RIGHT ? x + 2 : playerNextX
      const weaponNextY = direction === DIRECTION_ENUM.TOP ? y - 1 : direction === DIRECTION_ENUM.BOTTOM ? y + 1 : y

      if (this.checkBlock(playerNextX, playerNextY, weaponNextX, weaponNextY)) return true
    } else if (inputDirection === CONTROLLER_ENUM.TURNLEFT) {
      let nextX
      let nextY
      if (direction == DIRECTION_ENUM.TOP) {
        nextX = x - 1
        nextY = y - 1
      } else if (direction == DIRECTION_ENUM.LEFT) {
        nextX = x - 1
        nextY = y + 1
      } else if (direction == DIRECTION_ENUM.BOTTOM) {
        nextX = x + 1
        nextY = y + 1
      } else if (direction == DIRECTION_ENUM.RIGHT) {
        nextX = x + 1
        nextY = y - 1
      }

      if (
        (!tileInfo[x][nextY] || tileInfo[x][nextY].turnable) &&
        (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable) &&
        (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)
      ) {
        // empty
      } else {
        this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT
        return true
      }
    } else if (inputDirection === CONTROLLER_ENUM.TURNRIGHT) {
      let nextX
      let nextY
      if (direction == DIRECTION_ENUM.TOP) {
        nextX = x + 1
        nextY = y - 1
      } else if (direction == DIRECTION_ENUM.RIGHT) {
        nextX = x + 1
        nextY = y + 1
      } else if (direction == DIRECTION_ENUM.BOTTOM) {
        nextX = x - 1
        nextY = y + 1
      } else if (direction == DIRECTION_ENUM.LEFT) {
        nextX = x - 1
        nextY = y - 1
      }

      if (
        (!tileInfo[x][nextY] || tileInfo[x][nextY].turnable) &&
        (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable) &&
        (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)
      ) {
        // empty
      } else {
        this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT
        return true
      }
    }
    return false
  }

  private checkBlock(playerNextX: number, playerNextY: number, weaponNextX: number, weaponNextY: number): boolean {
    const { tileInfo, mapRowCount, mapColCount } = DataManager.Instance
    if (playerNextX < 0 || playerNextX >= mapColCount || playerNextY < 0 || playerNextY >= mapRowCount) {
      this.state = ENTITY_STATE_ENUM.BLOCKFRONT
      return true
    }

    const playerTile = tileInfo[playerNextX][playerNextY]
    const weaponTile =
      weaponNextX < 0 || weaponNextX >= mapColCount || weaponNextY < 0 || weaponNextY >= mapRowCount
        ? null
        : tileInfo[weaponNextX][weaponNextY]

    if (playerTile && playerTile.moveable && (!weaponTile || weaponTile.turnable)) {
      return false
    } else {
      this.state = ENTITY_STATE_ENUM.BLOCKFRONT
      return true
    }
  }
}
