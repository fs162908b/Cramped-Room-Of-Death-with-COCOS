import Singleton from 'db://assets/Base/Singleton'

import { DEFALT_DURATION, DrawManager } from '../Scripts/UI/DrawManager'
import { createUINode } from '../Utils'
import { RenderRoot2D, game } from 'cc'

export default class FadeManager extends Singleton {
  static get Instance() {
    return super.GetInstance<FadeManager>()
  }

  private _fader: DrawManager = null

  get fader(){
    if(this._fader !== null){
      return this._fader
    }

    const root = createUINode()
    root.addComponent(RenderRoot2D)
    const fadeNode = createUINode()
    fadeNode.setParent(root)
    this._fader = fadeNode.addComponent(DrawManager)
    this._fader.init()

    game.addPersistRootNode(root)

    return this._fader

  }

  fadeIn(duration:number = DEFALT_DURATION ){
    return this.fader.fadeIn(duration)
  }

  fadeOut(duration:number = DEFALT_DURATION){
    return this.fader.fadeOut(duration)
  }

}
