System.register("chunks:///_virtual/DoorStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './StateMachine.ts', './IdleSubStateMachine.ts', './DeathSubStateMachine3.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, cclegacy, _decorator, Animation, PARAMS_NAME_ENUM, getInitParamsTrigger, getInitParamsNumber, StateMachine, IdleSubStateMachine, DeathSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
    }, function (module) {
      PARAMS_NAME_ENUM = module.PARAMS_NAME_ENUM;
    }, function (module) {
      getInitParamsTrigger = module.getInitParamsTrigger;
      getInitParamsNumber = module.getInitParamsNumber;
      StateMachine = module.StateMachine;
    }, function (module) {
      IdleSubStateMachine = module.default;
    }, function (module) {
      DeathSubStateMachine = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "01dd0EUFPxDdILo+1cOlz3a", "DoorStateMachine", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DoorStateMachine = exports('DoorStateMachine', (_dec = ccclass('DoorStateMachine'), _dec(_class = /*#__PURE__*/function (_StateMachine) {
        _inheritsLoose(DoorStateMachine, _StateMachine);

        function DoorStateMachine() {
          return _StateMachine.apply(this, arguments) || this;
        }

        var _proto = DoorStateMachine.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.animationComponent = this.addComponent(Animation);
                    this.initParams();
                    this.initStateMachine();
                    this.initAnimationEvent();
                    _context.next = 6;
                    return Promise.all(this.waitingList);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.initParams = function initParams() {
          this.params.set(PARAMS_NAME_ENUM.IDLE, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
        };

        _proto.initStateMachine = function initStateMachine() {
          this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.DEATH, new DeathSubStateMachine(this));
        };

        _proto.initAnimationEvent = function initAnimationEvent() {};

        _proto.run = function run() {
          switch (this.currentState) {
            case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachines.get(PARAMS_NAME_ENUM.DEATH):
              if (this.params.get(PARAMS_NAME_ENUM.DEATH).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.DEATH);
              } else if (this.params.get(PARAMS_NAME_ENUM.IDLE).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
          }
        };

        return DoorStateMachine;
      }(StateMachine)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AttackSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "02e9agLIzxOwpqTC0IqNr9T", "AttackSubStateMachine", undefined);

      var BASE_URL = 'texture/woodenskeleton/attack/';
      var AttackSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(AttackSubStateMachine, _DirectionSubStateMac);

        function AttackSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return AttackSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BattleManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './index3.ts', './TileManager.ts', './DataManager.ts', './TileMapManager.ts', './index2.ts', './EventManager.ts', './PlayerManager.ts', './WoodenSkeletonManager.ts', './DoorManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, Component, Event_ENUM, createUINode, TILE_WIDTH, TILE_HEIGHT, DataManager, TileMapManager, levels, EventManager, PlayerManager, WoodenSkeletonManager, DoorManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Event_ENUM = module.Event_ENUM;
    }, function (module) {
      createUINode = module.createUINode;
    }, function (module) {
      TILE_WIDTH = module.TILE_WIDTH;
      TILE_HEIGHT = module.TILE_HEIGHT;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      TileMapManager = module.TileMapManager;
    }, function (module) {
      levels = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      PlayerManager = module.PlayerManager;
    }, function (module) {
      WoodenSkeletonManager = module.WoodenSkeletonManager;
    }, function (module) {
      DoorManager = module.DoorManager;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "0d3c0BMeRxAZaOHzqyQqQtx", "BattleManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BattleManager = exports('BattleManager', (_dec = ccclass('BattleManager'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BattleManager, _Component);

        function BattleManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "level", void 0);

          _defineProperty(_assertThisInitialized(_this), "stage", void 0);

          return _this;
        }

        var _proto = BattleManager.prototype;

        _proto.start = function start() {
          this.generateStage();
          this.initLevel();
        };

        _proto.onLoad = function onLoad() {
          EventManager.Instance.on(Event_ENUM.NEXT_LEVEL, this.nextLevel, this);
        };

        _proto.onDestroy = function onDestroy() {
          EventManager.Instance.off(Event_ENUM.NEXT_LEVEL, this.nextLevel);
        };

        _proto.initLevel = function initLevel() {
          var level = levels["level" + DataManager.Instance.levelIndex];

          if (level) {
            this.clearLevel();
            this.level = level;
            DataManager.Instance.mapInfo = this.level.mapInfo;
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0;
            DataManager.Instance.mapColCount = this.level.mapInfo[0].length || 0;
            this.generateTileMap();
            this.generateDoor();
            this.generatePlayer();
            this.generateEnemies();
          }
        };

        _proto.nextLevel = function nextLevel() {
          DataManager.Instance.levelIndex++;
          this.initLevel();
        };

        _proto.clearLevel = function clearLevel() {
          this.stage.destroyAllChildren();
          DataManager.Instance.reset();
        };

        _proto.generateStage = function generateStage() {
          this.stage = createUINode();
          this.stage.setParent(this.node);
        };

        _proto.generateTileMap = /*#__PURE__*/function () {
          var _generateTileMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var tileMap, tileMapManager;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    tileMap = createUINode();
                    _context.next = 3;
                    return tileMap.setParent(this.stage);

                  case 3:
                    tileMapManager = tileMap.addComponent(TileMapManager);
                    tileMapManager.init();
                    this.adapPos();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function generateTileMap() {
            return _generateTileMap.apply(this, arguments);
          }

          return generateTileMap;
        }();

        _proto.generatePlayer = /*#__PURE__*/function () {
          var _generatePlayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var player, playerManager;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    player = createUINode();
                    player.setParent(this.stage);
                    playerManager = player.addComponent(PlayerManager);
                    _context2.next = 5;
                    return playerManager.init();

                  case 5:
                    DataManager.Instance.player = playerManager;
                    EventManager.Instance.emit(Event_ENUM.PLAYER_BORN, true);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function generatePlayer() {
            return _generatePlayer.apply(this, arguments);
          }

          return generatePlayer;
        }();

        _proto.generateEnemies = /*#__PURE__*/function () {
          var _generateEnemies = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var enemy, woodenSkeletonManager;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    enemy = createUINode();
                    enemy.setParent(this.stage);
                    woodenSkeletonManager = enemy.addComponent(WoodenSkeletonManager);
                    _context3.next = 5;
                    return woodenSkeletonManager.init();

                  case 5:
                    DataManager.Instance.enermies.push(woodenSkeletonManager);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function generateEnemies() {
            return _generateEnemies.apply(this, arguments);
          }

          return generateEnemies;
        }();

        _proto.generateDoor = /*#__PURE__*/function () {
          var _generateDoor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var door, doorManager;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    door = createUINode();
                    door.setParent(this.stage);
                    doorManager = door.addComponent(DoorManager);
                    _context4.next = 5;
                    return doorManager.init();

                  case 5:
                    DataManager.Instance.door = doorManager;

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function generateDoor() {
            return _generateDoor.apply(this, arguments);
          }

          return generateDoor;
        }();

        _proto.adapPos = function adapPos() {
          // 獲取地圖大小
          var _DataManager$Instance = DataManager.Instance,
              mapRowCount = _DataManager$Instance.mapRowCount,
              mapColCount = _DataManager$Instance.mapColCount;
          var disX = TILE_WIDTH * mapRowCount / 2;
          var disY = TILE_HEIGHT * mapColCount / 2 + 80;
          this.stage.setPosition(-disX, disY);
        };

        return BattleManager;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DeathSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "271a48oHKlNwYPeyuHkbPYc", "DeathSubStateMachine", undefined);

      var BASE_URL = 'texture/player/death/';
      var DeathSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(DeathSubStateMachine, _DirectionSubStateMac);

        function DeathSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return DeathSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ControllerManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './EventManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, Event_ENUM, EventManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Event_ENUM = module.Event_ENUM;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "2ffe3Oy1LBE97ndM/3f2Oc4", "ControllerManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ControllerManager = exports('ControllerManager', (_dec = ccclass('ControllerManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ControllerManager, _Component);

        function ControllerManager() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ControllerManager.prototype;

        _proto.handleCtrl = function handleCtrl(evt, type) {
          EventManager.Instance.emit(Event_ENUM.PLAYER_CTRL, type);
        };

        return ControllerManager;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockTurnRightSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3972e9k3otI37f0ooFKzfZx", "BlockTurnRightSubStateMachine", undefined);

      var BASE_URL = 'texture/player/blockturnright/';
      var BlockTurnRightSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(BlockTurnRightSubStateMachine, _DirectionSubStateMac);

        function BlockTurnRightSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return BlockTurnRightSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DoorManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './DoorStateMachine.ts', './DataManager.ts', './EventManager.ts', './EntityManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, cclegacy, _decorator, Event_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, DIRECTION_ENUM, DoorStateMachine, DataManager, EventManager, EntityManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Event_ENUM = module.Event_ENUM;
      ENTITY_STATE_ENUM = module.ENTITY_STATE_ENUM;
      ENTITY_TYPE_ENUM = module.ENTITY_TYPE_ENUM;
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      DoorStateMachine = module.DoorStateMachine;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      EntityManager = module.EntityManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "3f7372LMrdJcbaydmbn4WFH", "DoorManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DoorManager = exports('DoorManager', (_dec = ccclass('DoorManager'), _dec(_class = /*#__PURE__*/function (_EntityManager) {
        _inheritsLoose(DoorManager, _EntityManager);

        function DoorManager() {
          return _EntityManager.apply(this, arguments) || this;
        }

        var _proto = DoorManager.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // await this.render()
                    this.fsm = this.addComponent(DoorStateMachine);
                    _context.next = 3;
                    return this.fsm.init();

                  case 3:
                    _EntityManager.prototype.init.call(this, {
                      x: 7,
                      y: 8,
                      type: ENTITY_TYPE_ENUM.DOOR,
                      direction: DIRECTION_ENUM.TOP,
                      state: ENTITY_STATE_ENUM.IDLE
                    });

                    EventManager.Instance.on(Event_ENUM.DOOR_OPEN, this.onOpen, this);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.onDestroy = function onDestroy() {
          _EntityManager.prototype.onDestroy.call(this);

          EventManager.Instance.off(Event_ENUM.DOOR_OPEN, this.onOpen);
        };

        _proto.onOpen = function onOpen() {
          if (DataManager.Instance.enermies.every(function (enemy) {
            return enemy.state === ENTITY_STATE_ENUM.DEATH;
          }) && this.state !== ENTITY_STATE_ENUM.DEATH) {
            this.state = ENTITY_STATE_ENUM.DEATH;
          }
        };

        return DoorManager;
      }(EntityManager)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WoodenSkeletonManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './DataManager.ts', './EventManager.ts', './EntityManager.ts', './WoodenSkeletonStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, cclegacy, _decorator, Event_ENUM, ENTITY_STATE_ENUM, DIRECTION_ENUM, ENTITY_TYPE_ENUM, DataManager, EventManager, EntityManager, WoodenSkeletonStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Event_ENUM = module.Event_ENUM;
      ENTITY_STATE_ENUM = module.ENTITY_STATE_ENUM;
      DIRECTION_ENUM = module.DIRECTION_ENUM;
      ENTITY_TYPE_ENUM = module.ENTITY_TYPE_ENUM;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      EntityManager = module.EntityManager;
    }, function (module) {
      WoodenSkeletonStateMachine = module.WoodenSkeletonStateMachine;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "45f56xqtCtPXLzAh4qv/ZaS", "WoodenSkeletonManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WoodenSkeletonManager = exports('WoodenSkeletonManager', (_dec = ccclass('WoodenSkeletonManager'), _dec(_class = /*#__PURE__*/function (_EntityManager) {
        _inheritsLoose(WoodenSkeletonManager, _EntityManager);

        function WoodenSkeletonManager() {
          return _EntityManager.apply(this, arguments) || this;
        }

        var _proto = WoodenSkeletonManager.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // await this.render()
                    this.fsm = this.addComponent(WoodenSkeletonStateMachine);
                    _context.next = 3;
                    return this.fsm.init();

                  case 3:
                    _EntityManager.prototype.init.call(this, {
                      x: 2,
                      y: 4,
                      type: ENTITY_TYPE_ENUM.SKELETON,
                      direction: DIRECTION_ENUM.TOP,
                      state: ENTITY_STATE_ENUM.IDLE
                    });

                    EventManager.Instance.on(Event_ENUM.PLAYER_MOVE_END, this.onChangeDirection, this);
                    EventManager.Instance.on(Event_ENUM.PLAYER_BORN, this.onChangeDirection, this);
                    EventManager.Instance.on(Event_ENUM.PLAYER_MOVE_END, this.onAttack, this);
                    EventManager.Instance.on(Event_ENUM.ATTACK_ENEMY, this.onDead, this);
                    this.onChangeDirection(true);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.onDestroy = function onDestroy() {
          _EntityManager.prototype.onDestroy.call(this);

          EventManager.Instance.off(Event_ENUM.PLAYER_MOVE_END, this.onChangeDirection);
          EventManager.Instance.off(Event_ENUM.PLAYER_BORN, this.onChangeDirection);
          EventManager.Instance.off(Event_ENUM.PLAYER_MOVE_END, this.onAttack);
          EventManager.Instance.off(Event_ENUM.ATTACK_ENEMY, this.onDead);
        };

        _proto.onChangeDirection = function onChangeDirection(isInited) {
          if (isInited === void 0) {
            isInited = false;
          }

          if (this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player) return;
          var _DataManager$Instance = DataManager.Instance.player,
              playerX = _DataManager$Instance.x,
              playerY = _DataManager$Instance.y;
          var disX = Math.abs(this.x - playerX);
          var disY = Math.abs(this.y - playerY);

          if (disX === disY && !isInited) {
            return;
          }

          if (playerX >= this.x && playerY <= this.y) {
            this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.RIGHT;
          } else if (playerX <= this.x && playerY <= this.y) {
            this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.LEFT;
          } else if (playerX <= this.x && playerY > this.y) {
            this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.LEFT;
          } else if (playerX >= this.x && playerY > this.y) {
            this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.RIGHT;
          }
        };

        _proto.onAttack = function onAttack() {
          if (this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player) return;
          var _DataManager$Instance2 = DataManager.Instance.player,
              playerX = _DataManager$Instance2.x,
              playerY = _DataManager$Instance2.y,
              playerState = _DataManager$Instance2.state;

          if ((this.x === playerX && Math.abs(this.y - playerY) <= 1 || this.y === playerY && Math.abs(this.x - playerX) <= 1) && playerState !== ENTITY_STATE_ENUM.DEATH && playerState !== ENTITY_STATE_ENUM.AIRDEATH) {
            this.state = ENTITY_STATE_ENUM.ATTACK;
            EventManager.Instance.emit(Event_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.DEATH);
          } else {
            this.state = ENTITY_STATE_ENUM.IDLE;
          }
        };

        _proto.onDead = function onDead(id) {
          if (this.state === ENTITY_STATE_ENUM.DEATH) {
            return;
          }

          if (this.id === id) this.state = ENTITY_STATE_ENUM.DEATH;
        };

        return WoodenSkeletonManager;
      }(EntityManager)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4767bIyXDtM/6ylazKJhTOq", "SubStateMachine", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SubStateMachine = exports('SubStateMachine', /*#__PURE__*/function () {
        function SubStateMachine(fsm) {
          _defineProperty(this, "_currentState", null);

          _defineProperty(this, "stateMachines", new Map());

          this.fsm = fsm;
        }

        _createClass(SubStateMachine, [{
          key: "currentState",
          get: function get() {
            return this._currentState;
          },
          set: function set(newState) {
            this._currentState = newState;

            this._currentState.run();
          }
        }]);

        return SubStateMachine;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IdleSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4dfe3GCoTZELYvqiszFK3kO", "IdleSubStateMachine", undefined);

      var BASE_URL = 'texture/door/idle/';
      var IdleSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(IdleSubStateMachine, _DirectionSubStateMac);

        function IdleSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "left"));

          return _this;
        }

        return IdleSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './StateMachine.ts', './TurnLeftSubStateMachine.ts', './TurnRightSubStateMachine.ts', './IdleSubStateMachine2.ts', './BlockFrontSubStateMachine.ts', './EntityManager.ts', './BlockTurnLeftSubStateMachine.ts', './BlockTurnRightSubStateMachine.ts', './DeathSubStateMachine.ts', './AttackSubStateMachine2.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, cclegacy, _decorator, Animation, PARAMS_NAME_ENUM, ENTITY_STATE_ENUM, getInitParamsTrigger, getInitParamsNumber, StateMachine, TurnLeftSubStateMachine, TurnRightSubStateMachine, IdleSubStateMachine, BlockFrontSubStateMachine, EntityManager, BlockTurnLeftSubStateMachine, BlockTurnRightSubStateMachine, DeathSubStateMachine, AttackSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
    }, function (module) {
      PARAMS_NAME_ENUM = module.PARAMS_NAME_ENUM;
      ENTITY_STATE_ENUM = module.ENTITY_STATE_ENUM;
    }, function (module) {
      getInitParamsTrigger = module.getInitParamsTrigger;
      getInitParamsNumber = module.getInitParamsNumber;
      StateMachine = module.StateMachine;
    }, function (module) {
      TurnLeftSubStateMachine = module.default;
    }, function (module) {
      TurnRightSubStateMachine = module.default;
    }, function (module) {
      IdleSubStateMachine = module.default;
    }, function (module) {
      BlockFrontSubStateMachine = module.default;
    }, function (module) {
      EntityManager = module.EntityManager;
    }, function (module) {
      BlockTurnLeftSubStateMachine = module.default;
    }, function (module) {
      BlockTurnRightSubStateMachine = module.default;
    }, function (module) {
      DeathSubStateMachine = module.default;
    }, function (module) {
      AttackSubStateMachine = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "4f0859UmaJLgLP/gfEvtlfP", "PlayerStateMachine", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayerStateMachine = exports('PlayerStateMachine', (_dec = ccclass('PlayerStateMachine'), _dec(_class = /*#__PURE__*/function (_StateMachine) {
        _inheritsLoose(PlayerStateMachine, _StateMachine);

        function PlayerStateMachine() {
          return _StateMachine.apply(this, arguments) || this;
        }

        var _proto = PlayerStateMachine.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.animationComponent = this.addComponent(Animation);
                    this.initParams();
                    this.initStateMachine();
                    this.initAnimationEvent();
                    _context.next = 6;
                    return Promise.all(this.waitingList);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.initParams = function initParams() {
          this.params.set(PARAMS_NAME_ENUM.IDLE, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.TURNLEFT, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.TURNRIGHT, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.BLOCKFRONT, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.BLOCKTURNRIGHT, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
          this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.ATTACK, getInitParamsTrigger());
        };

        _proto.initStateMachine = function initStateMachine() {
          this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.TURNLEFT, new TurnLeftSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.TURNRIGHT, new TurnRightSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.BLOCKFRONT, new BlockFrontSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, new BlockTurnLeftSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.BLOCKTURNRIGHT, new BlockTurnRightSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.DEATH, new DeathSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.ATTACK, new AttackSubStateMachine(this));
        };

        _proto.initAnimationEvent = function initAnimationEvent() {
          var _this = this;

          this.animationComponent.on(Animation.EventType.FINISHED, function () {
            var name = _this.animationComponent.defaultClip.name;
            var whiteList = ['block', 'turn', 'attack'];

            if (whiteList.some(function (item) {
              return name.includes(item);
            })) {
              _this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE;
            }
          });
        };

        _proto.run = function run() {
          switch (this.currentState) {
            case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachines.get(PARAMS_NAME_ENUM.BLOCKFRONT):
            case this.stateMachines.get(PARAMS_NAME_ENUM.TURNLEFT):
            case this.stateMachines.get(PARAMS_NAME_ENUM.TURNRIGHT):
            case this.stateMachines.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT):
            case this.stateMachines.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT):
            case this.stateMachines.get(PARAMS_NAME_ENUM.DEATH):
            case this.stateMachines.get(PARAMS_NAME_ENUM.ATTACK):
              if (this.params.get(PARAMS_NAME_ENUM.DEATH).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.DEATH);
              } else if (this.params.get(PARAMS_NAME_ENUM.ATTACK).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.ATTACK);
              } else if (this.params.get(PARAMS_NAME_ENUM.TURNLEFT).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.TURNLEFT);
              } else if (this.params.get(PARAMS_NAME_ENUM.TURNRIGHT).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.TURNRIGHT);
              } else if (this.params.get(PARAMS_NAME_ENUM.BLOCKFRONT).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.BLOCKFRONT);
              } else if (this.params.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT);
              } else if (this.params.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT);
              } else if (this.params.get(PARAMS_NAME_ENUM.IDLE).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
          }
        };

        return PlayerStateMachine;
      }(StateMachine)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EntityManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './index3.ts', './TileManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, cclegacy, _decorator, Component, Sprite, UITransform, PARAMS_NAME_ENUM, DIRECTION_ORDER_ENUM, randomByLen, TILE_WIDTH, TILE_HEIGHT;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
    }, function (module) {
      PARAMS_NAME_ENUM = module.PARAMS_NAME_ENUM;
      DIRECTION_ORDER_ENUM = module.DIRECTION_ORDER_ENUM;
    }, function (module) {
      randomByLen = module.randomByLen;
    }, function (module) {
      TILE_WIDTH = module.TILE_WIDTH;
      TILE_HEIGHT = module.TILE_HEIGHT;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "54b27U094xOQITsFnSWzVVO", "EntityManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EntityManager = exports('EntityManager', (_dec = ccclass('EntityManager'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EntityManager, _Component);

        function EntityManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "id", randomByLen(12));

          _defineProperty(_assertThisInitialized(_this), "x", 0);

          _defineProperty(_assertThisInitialized(_this), "y", 0);

          _defineProperty(_assertThisInitialized(_this), "fsm", void 0);

          _defineProperty(_assertThisInitialized(_this), "_direction", void 0);

          _defineProperty(_assertThisInitialized(_this), "_state", void 0);

          _defineProperty(_assertThisInitialized(_this), "type", void 0);

          return _this;
        }

        var _proto = EntityManager.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
            var sprite, transform;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    sprite = this.addComponent(Sprite);
                    sprite.sizeMode = Sprite.SizeMode.CUSTOM;
                    transform = this.getComponent(UITransform);
                    transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);
                    this.x = params.x;
                    this.y = params.y;
                    this.direction = params.direction;
                    this.state = params.state;
                    this.type = params.type;

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init(_x) {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.update = function update() {
          this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5);
        };

        _proto.onDestroy = function onDestroy() {};

        _createClass(EntityManager, [{
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(value) {
            this._direction = value;
            this.fsm.setParams(PARAMS_NAME_ENUM.DIRECTION, DIRECTION_ORDER_ENUM[value]);
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(value) {
            this._state = value;
            this.fsm.setParams(value, true);
          }
        }]);

        return EntityManager;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DeathSubStateMachine2.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "58806mV+LtO+5NynQKOO/Qf", "DeathSubStateMachine", undefined);

      var BASE_URL = 'texture/woodenskeleton/death/';
      var DeathSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(DeathSubStateMachine, _DirectionSubStateMac);

        function DeathSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return DeathSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DirectionSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './SubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, PARAMS_NAME_ENUM, DIRECTION_ORDER_ENUM, SubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      PARAMS_NAME_ENUM = module.PARAMS_NAME_ENUM;
      DIRECTION_ORDER_ENUM = module.DIRECTION_ORDER_ENUM;
    }, function (module) {
      SubStateMachine = module.SubStateMachine;
    }],
    execute: function () {
      cclegacy._RF.push({}, "58ff2vFkUFP8qT8IHNyWmgG", "DirectionSubStateMachine", undefined);

      var DirectionSubStateMachine = exports('default', /*#__PURE__*/function (_SubStateMachine) {
        _inheritsLoose(DirectionSubStateMachine, _SubStateMachine);

        function DirectionSubStateMachine() {
          return _SubStateMachine.apply(this, arguments) || this;
        }

        var _proto = DirectionSubStateMachine.prototype;

        _proto.run = function run() {
          var direction = this.fsm.getParams(PARAMS_NAME_ENUM.DIRECTION).value;
          this.currentState = this.stateMachines.get(DIRECTION_ORDER_ENUM[direction]);
        };

        return DirectionSubStateMachine;
      }(SubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, _defineProperty, _assertThisInitialized, cclegacy, Singleton;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "64987ZGU1lPCIWMs3PTquYE", "DataManager", undefined);

      var DataManager = exports('default', /*#__PURE__*/function (_Singleton) {
        _inheritsLoose(DataManager, _Singleton);

        function DataManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Singleton.call.apply(_Singleton, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "mapInfo", void 0);

          _defineProperty(_assertThisInitialized(_this), "tileInfo", []);

          _defineProperty(_assertThisInitialized(_this), "mapRowCount", 0);

          _defineProperty(_assertThisInitialized(_this), "mapColCount", 0);

          _defineProperty(_assertThisInitialized(_this), "levelIndex", 1);

          _defineProperty(_assertThisInitialized(_this), "player", void 0);

          _defineProperty(_assertThisInitialized(_this), "enermies", []);

          _defineProperty(_assertThisInitialized(_this), "door", void 0);

          return _this;
        }

        var _proto = DataManager.prototype;

        _proto.reset = function reset() {
          this.mapInfo = [];
          this.mapRowCount = 0;
          this.mapColCount = 0;
          this.tileInfo = [];
          this.player = null;
          this.enermies = [];
          this.door = null;
        };

        _createClass(DataManager, null, [{
          key: "Instance",
          get: function get() {
            return _Singleton.GetInstance.call(this);
          }
        }]);

        return DataManager;
      }(Singleton));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WoodenSkeletonStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './StateMachine.ts', './AttackSubStateMachine.ts', './EntityManager.ts', './IdleSubStateMachine3.ts', './DeathSubStateMachine2.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, cclegacy, _decorator, Animation, PARAMS_NAME_ENUM, ENTITY_STATE_ENUM, getInitParamsTrigger, getInitParamsNumber, StateMachine, AttackSubStateMachine, EntityManager, IdleSubStateMachine, DeathSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
    }, function (module) {
      PARAMS_NAME_ENUM = module.PARAMS_NAME_ENUM;
      ENTITY_STATE_ENUM = module.ENTITY_STATE_ENUM;
    }, function (module) {
      getInitParamsTrigger = module.getInitParamsTrigger;
      getInitParamsNumber = module.getInitParamsNumber;
      StateMachine = module.StateMachine;
    }, function (module) {
      AttackSubStateMachine = module.default;
    }, function (module) {
      EntityManager = module.EntityManager;
    }, function (module) {
      IdleSubStateMachine = module.default;
    }, function (module) {
      DeathSubStateMachine = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "69586MwpahL5rHH3AAc2RGM", "WoodenSkeletonStateMachine", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WoodenSkeletonStateMachine = exports('WoodenSkeletonStateMachine', (_dec = ccclass('WoodenSkeletonStateMachine'), _dec(_class = /*#__PURE__*/function (_StateMachine) {
        _inheritsLoose(WoodenSkeletonStateMachine, _StateMachine);

        function WoodenSkeletonStateMachine() {
          return _StateMachine.apply(this, arguments) || this;
        }

        var _proto = WoodenSkeletonStateMachine.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.animationComponent = this.addComponent(Animation);
                    this.initParams();
                    this.initStateMachine();
                    this.initAnimationEvent();
                    _context.next = 6;
                    return Promise.all(this.waitingList);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.initParams = function initParams() {
          this.params.set(PARAMS_NAME_ENUM.IDLE, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
          this.params.set(PARAMS_NAME_ENUM.ATTACK, getInitParamsTrigger());
          this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParamsTrigger());
        };

        _proto.initStateMachine = function initStateMachine() {
          this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.ATTACK, new AttackSubStateMachine(this));
          this.stateMachines.set(PARAMS_NAME_ENUM.DEATH, new DeathSubStateMachine(this));
        };

        _proto.initAnimationEvent = function initAnimationEvent() {
          var _this = this;

          this.animationComponent.on(Animation.EventType.FINISHED, function () {
            var name = _this.animationComponent.defaultClip.name;
            var whiteList = ['attack'];

            if (whiteList.some(function (item) {
              return name.includes(item);
            })) {
              _this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE;
            }
          });
        };

        _proto.run = function run() {
          switch (this.currentState) {
            case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachines.get(PARAMS_NAME_ENUM.ATTACK):
            case this.stateMachines.get(PARAMS_NAME_ENUM.DEATH):
              if (this.params.get(PARAMS_NAME_ENUM.DEATH).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.DEATH);
              } else if (this.params.get(PARAMS_NAME_ENUM.ATTACK).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.ATTACK);
              } else if (this.params.get(PARAMS_NAME_ENUM.IDLE).value) {
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
          }
        };

        return WoodenSkeletonStateMachine;
      }(StateMachine)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IdleSubStateMachine2.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, AnimationClip, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AnimationClip = module.AnimationClip;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7b571uctFZFPqaHUcajlL/G", "IdleSubStateMachine", undefined);

      var BASE_URL = 'texture/player/idle/';
      var IdleSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(IdleSubStateMachine, _DirectionSubStateMac);

        function IdleSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top", AnimationClip.WrapMode.Loop));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom", AnimationClip.WrapMode.Loop));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left", AnimationClip.WrapMode.Loop));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right", AnimationClip.WrapMode.Loop));

          return _this;
        }

        return IdleSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        CONTROLLER_ENUM: void 0,
        DIRECTION_ENUM: void 0,
        DIRECTION_ORDER_ENUM: void 0,
        ENTITY_STATE_ENUM: void 0,
        ENTITY_TYPE_ENUM: void 0,
        Event_ENUM: void 0,
        FSM_PARAM_TYPE_ENUM: void 0,
        PARAMS_NAME_ENUM: void 0,
        TILE_TYPE_ENUM: void 0
      });

      cclegacy._RF.push({}, "7c605sw06xH+7yjvh7bJjKj", "index", undefined);

      var TILE_TYPE_ENUM;

      (function (TILE_TYPE_ENUM) {
        TILE_TYPE_ENUM["WALL_ROW"] = "WALL_ROW";
        TILE_TYPE_ENUM["WALL_COLUMN"] = "WALL_COLUMN";
        TILE_TYPE_ENUM["WALL_LEFT_TOP"] = "WALL_LEFT_TOP";
        TILE_TYPE_ENUM["WALL_LEFT_BOTTOM"] = "WALL_LEFT_BOTTOM";
        TILE_TYPE_ENUM["WALL_RIGHT_TOP"] = "WALL_RIGHT_TOP";
        TILE_TYPE_ENUM["WALL_RIGHT_BOTTOM"] = "WALL_RIGHT_BOTTOM";
        TILE_TYPE_ENUM["CLIFF_LEFT"] = "CLIFF_LEFT";
        TILE_TYPE_ENUM["CLIFF_RIGHT"] = "CLIFF_RIGHT";
        TILE_TYPE_ENUM["CLIFF_CENTER"] = "CLIFF_CENTER";
        TILE_TYPE_ENUM["FLOOR"] = "FLOOR";
      })(TILE_TYPE_ENUM || (TILE_TYPE_ENUM = exports('TILE_TYPE_ENUM', {})));

      var Event_ENUM;

      (function (Event_ENUM) {
        Event_ENUM["NEXT_LEVEL"] = "NEXT_LEVEL";
        Event_ENUM["PLAYER_CTRL"] = "PLAYER_CTRL";
        Event_ENUM["PLAYER_MOVE_END"] = "PLAYER_MOVE_END";
        Event_ENUM["PLAYER_BORN"] = "PLAYER_BORN";
        Event_ENUM["ATTACK_PLAYER"] = "ATTACK_PLAYER";
        Event_ENUM["ATTACK_ENEMY"] = "ATTACK_ENEMY";
        Event_ENUM["DOOR_OPEN"] = "DOOR_OPEN";
      })(Event_ENUM || (Event_ENUM = exports('Event_ENUM', {})));

      var CONTROLLER_ENUM;

      (function (CONTROLLER_ENUM) {
        CONTROLLER_ENUM["TOP"] = "TOP";
        CONTROLLER_ENUM["BOTTOM"] = "BOTTOM";
        CONTROLLER_ENUM["LEFT"] = "LEFT";
        CONTROLLER_ENUM["RIGHT"] = "RIGHT";
        CONTROLLER_ENUM["TURNLEFT"] = "TURNLEFT";
        CONTROLLER_ENUM["TURNRIGHT"] = "TURNRIGHT";
      })(CONTROLLER_ENUM || (CONTROLLER_ENUM = exports('CONTROLLER_ENUM', {})));

      var FSM_PARAM_TYPE_ENUM;

      (function (FSM_PARAM_TYPE_ENUM) {
        FSM_PARAM_TYPE_ENUM["TRIGGER"] = "TRIGGER";
        FSM_PARAM_TYPE_ENUM["NUMBER"] = "NUMBER";
      })(FSM_PARAM_TYPE_ENUM || (FSM_PARAM_TYPE_ENUM = exports('FSM_PARAM_TYPE_ENUM', {})));

      var PARAMS_NAME_ENUM;

      (function (PARAMS_NAME_ENUM) {
        PARAMS_NAME_ENUM["IDLE"] = "IDLE";
        PARAMS_NAME_ENUM["TURNLEFT"] = "TURNLEFT";
        PARAMS_NAME_ENUM["BLOCKFRONT"] = "BLOCKFRONT";
        PARAMS_NAME_ENUM["BLOCKTURNLEFT"] = "BLOCKTURNLEFT";
        PARAMS_NAME_ENUM["BLOCKTURNRIGHT"] = "BLOCKTURNRIGHT";
        PARAMS_NAME_ENUM["DIRECTION"] = "DIRECTION";
        PARAMS_NAME_ENUM["ATTACK"] = "ATTACK";
        PARAMS_NAME_ENUM["TURNRIGHT"] = "TURNRIGHT";
        PARAMS_NAME_ENUM["DEATH"] = "DEATH";
        PARAMS_NAME_ENUM["AIRDEATH"] = "AIRDEATH";
      })(PARAMS_NAME_ENUM || (PARAMS_NAME_ENUM = exports('PARAMS_NAME_ENUM', {})));

      var DIRECTION_ENUM;

      (function (DIRECTION_ENUM) {
        DIRECTION_ENUM["TOP"] = "TOP";
        DIRECTION_ENUM["BOTTOM"] = "BOTTOM";
        DIRECTION_ENUM["LEFT"] = "LEFT";
        DIRECTION_ENUM["RIGHT"] = "RIGHT";
      })(DIRECTION_ENUM || (DIRECTION_ENUM = exports('DIRECTION_ENUM', {})));

      var ENTITY_STATE_ENUM;

      (function (ENTITY_STATE_ENUM) {
        ENTITY_STATE_ENUM["IDLE"] = "IDLE";
        ENTITY_STATE_ENUM["TURNLEFT"] = "TURNLEFT";
        ENTITY_STATE_ENUM["BLOCKFRONT"] = "BLOCKFRONT";
        ENTITY_STATE_ENUM["BLOCKTURNLEFT"] = "BLOCKTURNLEFT";
        ENTITY_STATE_ENUM["BLOCKTURNRIGHT"] = "BLOCKTURNRIGHT";
        ENTITY_STATE_ENUM["ATTACK"] = "ATTACK";
        ENTITY_STATE_ENUM["TURNRIGHT"] = "TURNRIGHT";
        ENTITY_STATE_ENUM["DEATH"] = "DEATH";
        ENTITY_STATE_ENUM["AIRDEATH"] = "AIRDEATH";
      })(ENTITY_STATE_ENUM || (ENTITY_STATE_ENUM = exports('ENTITY_STATE_ENUM', {})));

      var DIRECTION_ORDER_ENUM;

      (function (DIRECTION_ORDER_ENUM) {
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["TOP"] = 0] = "TOP";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["BOTTOM"] = 1] = "BOTTOM";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["LEFT"] = 2] = "LEFT";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["RIGHT"] = 3] = "RIGHT";
      })(DIRECTION_ORDER_ENUM || (DIRECTION_ORDER_ENUM = exports('DIRECTION_ORDER_ENUM', {})));

      var ENTITY_TYPE_ENUM;

      (function (ENTITY_TYPE_ENUM) {
        ENTITY_TYPE_ENUM["PLAYER"] = "PLAYER";
        ENTITY_TYPE_ENUM["SKELETON"] = "SKELETON";
        ENTITY_TYPE_ENUM["DOOR"] = "DOOR";
      })(ENTITY_TYPE_ENUM || (ENTITY_TYPE_ENUM = exports('ENTITY_TYPE_ENUM', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/level2.ts", ['cc', './index.ts'], function (exports) {
  'use strict';

  var cclegacy, TILE_TYPE_ENUM;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TILE_TYPE_ENUM = module.TILE_TYPE_ENUM;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8364eeIn95NQoEkxSHpFnoe", "level2", undefined);

      var mapInfo = [[{
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 18,
        type: TILE_TYPE_ENUM.CLIFF_LEFT
      }], [{
        src: 21,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 20,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 20,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 22,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT
      }]];
      var level = exports('default', {
        mapInfo: mapInfo
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TurnRightSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "87bac+w43NCLJ9iiWaWT5Cx", "TurnRightSubStateMachine", undefined);

      var BASE_URL = 'texture/player/turnright/';
      var TurnRightSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(TurnRightSubStateMachine, _DirectionSubStateMac);

        function TurnRightSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return TurnRightSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TurnLeftSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8d4a7yVge1Iwaw1mBiqaAyH", "TurnLeftSubStateMachine", undefined);

      var BASE_URL = 'texture/player/turnleft/';
      var TurnLeftSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(TurnLeftSubStateMachine, _DirectionSubStateMac);

        function TurnLeftSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return TurnLeftSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index2.ts", ['cc', './level1.ts', './level2.ts'], function (exports) {
  'use strict';

  var cclegacy, level, level$1;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      level = module.default;
    }, function (module) {
      level$1 = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "97bedwGbj9As4BENHItDB6/", "index", undefined);

      var levels = exports('default', {
        level1: level,
        level2: level$1
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IdleSubStateMachine3.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, AnimationClip, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AnimationClip = module.AnimationClip;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a21edYxPzhOl7/MDdXY+Aoo", "IdleSubStateMachine", undefined);

      var BASE_URL = 'texture/woodenskeleton/idle/';
      var IdleSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(IdleSubStateMachine, _DirectionSubStateMac);

        function IdleSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top", AnimationClip.WrapMode.Loop));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom", AnimationClip.WrapMode.Loop));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left", AnimationClip.WrapMode.Loop));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right", AnimationClip.WrapMode.Loop));

          return _this;
        }

        return IdleSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockFrontSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ad647t2jQZAS67vt5q4KwhQ", "BlockFrontSubStateMachine", undefined);

      var BASE_URL = 'texture/player/blockfront/';
      var BlockFrontSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(BlockFrontSubStateMachine, _DirectionSubStateMac);

        function BlockFrontSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return BlockFrontSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './DataManager.ts', './EventManager.ts', './EntityManager.ts', './PlayerStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, Event_ENUM, ENTITY_STATE_ENUM, CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_TYPE_ENUM, DataManager, EventManager, EntityManager, PlayerStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Event_ENUM = module.Event_ENUM;
      ENTITY_STATE_ENUM = module.ENTITY_STATE_ENUM;
      CONTROLLER_ENUM = module.CONTROLLER_ENUM;
      DIRECTION_ENUM = module.DIRECTION_ENUM;
      ENTITY_TYPE_ENUM = module.ENTITY_TYPE_ENUM;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      EntityManager = module.EntityManager;
    }, function (module) {
      PlayerStateMachine = module.PlayerStateMachine;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "b0b29uTLlFNiZ27vLDnWiCh", "PlayerManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayerManager = exports('PlayerManager', (_dec = ccclass('PlayerManager'), _dec(_class = (_temp = /*#__PURE__*/function (_EntityManager) {
        _inheritsLoose(PlayerManager, _EntityManager);

        function PlayerManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _EntityManager.call.apply(_EntityManager, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "targetX", 0);

          _defineProperty(_assertThisInitialized(_this), "targetY", 0);

          _defineProperty(_assertThisInitialized(_this), "isMoving", false);

          _defineProperty(_assertThisInitialized(_this), "speed", 1 / 10);

          return _this;
        }

        var _proto = PlayerManager.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // await this.render()
                    this.fsm = this.addComponent(PlayerStateMachine);
                    _context.next = 3;
                    return this.fsm.init();

                  case 3:
                    _EntityManager.prototype.init.call(this, {
                      x: 2,
                      y: 8,
                      type: ENTITY_TYPE_ENUM.PLAYER,
                      direction: DIRECTION_ENUM.TOP,
                      state: ENTITY_STATE_ENUM.IDLE
                    });

                    this.targetX = this.x;
                    this.targetY = this.y;
                    EventManager.Instance.on(Event_ENUM.PLAYER_CTRL, this.inputHandle, this);
                    EventManager.Instance.on(Event_ENUM.ATTACK_PLAYER, this.onDead, this);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.update = function update() {
          this.updateXY();

          _EntityManager.prototype.update.call(this);
        };

        _proto.updateXY = function updateXY() {
          if (this.targetX < this.x) {
            this.x -= this.speed;
          } else if (this.targetX > this.x) {
            this.x += this.speed;
          }

          if (this.targetY < this.y) {
            this.y -= this.speed;
          } else if (this.targetY > this.y) {
            this.y += this.speed;
          }

          if (Math.abs(this.targetX - this.x) < 0.1 && Math.abs(this.targetY - this.y) < 0.1 && this.isMoving) {
            this.isMoving = false;
            this.x = this.targetX;
            this.y = this.targetY;
            EventManager.Instance.emit(Event_ENUM.PLAYER_MOVE_END);
          }
        };

        _proto.onDead = function onDead(type) {
          this.state = type;
        };

        _proto.inputHandle = function inputHandle(inputDirection) {
          if (this.state === ENTITY_STATE_ENUM.DEATH || this.state === ENTITY_STATE_ENUM.AIRDEATH || this.state === ENTITY_STATE_ENUM.ATTACK || this.isMoving) return;

          if (this.willBlock(inputDirection)) {
            return;
          }

          var id = this.willAttack(inputDirection);

          if (id) {
            EventManager.Instance.emit(Event_ENUM.ATTACK_ENEMY, id);
            EventManager.Instance.emit(Event_ENUM.DOOR_OPEN);
            return;
          }

          this.move(inputDirection);
        };

        _proto.move = function move(inputDirection) {
          if (inputDirection === CONTROLLER_ENUM.TOP) {
            this.targetY -= 1;
            this.isMoving = true;
          } else if (inputDirection === CONTROLLER_ENUM.BOTTOM) {
            this.targetY += 1;
            this.isMoving = true;
          } else if (inputDirection === CONTROLLER_ENUM.LEFT) {
            this.targetX -= 1;
            this.isMoving = true;
          } else if (inputDirection === CONTROLLER_ENUM.RIGHT) {
            this.targetX += 1;
            this.isMoving = true;
          } else if (inputDirection === CONTROLLER_ENUM.TURNLEFT) {
            if (this.direction == DIRECTION_ENUM.TOP) {
              this.direction = DIRECTION_ENUM.LEFT;
            } else if (this.direction == DIRECTION_ENUM.LEFT) {
              this.direction = DIRECTION_ENUM.BOTTOM;
            } else if (this.direction == DIRECTION_ENUM.BOTTOM) {
              this.direction = DIRECTION_ENUM.RIGHT;
            } else if (this.direction == DIRECTION_ENUM.RIGHT) {
              this.direction = DIRECTION_ENUM.TOP;
            }

            this.state = ENTITY_STATE_ENUM.TURNLEFT;
            EventManager.Instance.emit(Event_ENUM.PLAYER_MOVE_END);
          } else if (inputDirection === CONTROLLER_ENUM.TURNRIGHT) {
            if (this.direction == DIRECTION_ENUM.TOP) {
              this.direction = DIRECTION_ENUM.RIGHT;
            } else if (this.direction == DIRECTION_ENUM.RIGHT) {
              this.direction = DIRECTION_ENUM.BOTTOM;
            } else if (this.direction == DIRECTION_ENUM.BOTTOM) {
              this.direction = DIRECTION_ENUM.LEFT;
            } else if (this.direction == DIRECTION_ENUM.LEFT) {
              this.direction = DIRECTION_ENUM.TOP;
            }

            this.state = ENTITY_STATE_ENUM.TURNRIGHT;
            EventManager.Instance.emit(Event_ENUM.PLAYER_MOVE_END);
          }
        };

        _proto.willAttack = function willAttack(type) {
          var enermies = DataManager.Instance.enermies.filter(function (enemy) {
            return enemy.state !== ENTITY_STATE_ENUM.DEATH;
          });

          for (var i = 0; i < enermies.length; i++) {
            var _enermies$i = enermies[i],
                enemyX = _enermies$i.x,
                enemyY = _enermies$i.y,
                enemyId = _enermies$i.id;

            if (type === CONTROLLER_ENUM.TOP && this.direction === DIRECTION_ENUM.TOP && enemyX === this.x && enemyY === this.targetY - 2) {
              this.state = ENTITY_STATE_ENUM.ATTACK;
              return enemyId;
            } else if (type === CONTROLLER_ENUM.LEFT && this.direction === DIRECTION_ENUM.LEFT && enemyX === this.x - 2 && enemyY === this.targetY) {
              this.state = ENTITY_STATE_ENUM.ATTACK;
              return enemyId;
            } else if (type === CONTROLLER_ENUM.BOTTOM && this.direction === DIRECTION_ENUM.BOTTOM && enemyX === this.x && enemyY === this.targetY + 2) {
              this.state = ENTITY_STATE_ENUM.ATTACK;
              return enemyId;
            } else if (type === CONTROLLER_ENUM.RIGHT && this.direction === DIRECTION_ENUM.RIGHT && enemyX === this.x + 2 && enemyY === this.targetY) {
              this.state = ENTITY_STATE_ENUM.ATTACK;
              return enemyId;
            }
          }

          return '';
        };

        _proto.willBlock = function willBlock(inputDirection) {
          var x = this.targetX,
              y = this.targetY,
              direction = this.direction;
          var tileInfo = DataManager.Instance.tileInfo;

          if (inputDirection === CONTROLLER_ENUM.TOP) {
            var playerNextX = x;
            var playerNextY = y - 1;
            var weaponNextX = direction === DIRECTION_ENUM.LEFT ? x - 1 : direction === DIRECTION_ENUM.RIGHT ? x + 1 : x;
            var weaponNextY = direction === DIRECTION_ENUM.TOP ? y - 2 : direction === DIRECTION_ENUM.BOTTOM ? y : playerNextY;
            if (this.checkBlock(playerNextX, playerNextY, weaponNextX, weaponNextY)) return true;
          } else if (inputDirection === CONTROLLER_ENUM.BOTTOM) {
            var _playerNextX = x;

            var _playerNextY = y + 1;

            var _weaponNextX = direction === DIRECTION_ENUM.LEFT ? x - 1 : direction === DIRECTION_ENUM.RIGHT ? x + 1 : x;

            var _weaponNextY = direction === DIRECTION_ENUM.TOP ? y - 1 : direction === DIRECTION_ENUM.BOTTOM ? y + 2 : _playerNextY;

            if (this.checkBlock(_playerNextX, _playerNextY, _weaponNextX, _weaponNextY)) return true;
          } else if (inputDirection === CONTROLLER_ENUM.LEFT) {
            var _playerNextX2 = x - 1;

            var _playerNextY2 = y;

            var _weaponNextX2 = direction === DIRECTION_ENUM.LEFT ? x - 2 : direction === DIRECTION_ENUM.RIGHT ? x : _playerNextX2;

            var _weaponNextY2 = direction === DIRECTION_ENUM.TOP ? y - 1 : direction === DIRECTION_ENUM.BOTTOM ? y + 1 : y;

            if (this.checkBlock(_playerNextX2, _playerNextY2, _weaponNextX2, _weaponNextY2)) return true;
          } else if (inputDirection === CONTROLLER_ENUM.RIGHT) {
            var _playerNextX3 = x + 1;

            var _playerNextY3 = y;

            var _weaponNextX3 = direction === DIRECTION_ENUM.LEFT ? x : direction === DIRECTION_ENUM.RIGHT ? x + 2 : _playerNextX3;

            var _weaponNextY3 = direction === DIRECTION_ENUM.TOP ? y - 1 : direction === DIRECTION_ENUM.BOTTOM ? y + 1 : y;

            if (this.checkBlock(_playerNextX3, _playerNextY3, _weaponNextX3, _weaponNextY3)) return true;
          } else if (inputDirection === CONTROLLER_ENUM.TURNLEFT) {
            var nextX;
            var nextY;

            if (direction == DIRECTION_ENUM.TOP) {
              nextX = x - 1;
              nextY = y - 1;
            } else if (direction == DIRECTION_ENUM.LEFT) {
              nextX = x - 1;
              nextY = y + 1;
            } else if (direction == DIRECTION_ENUM.BOTTOM) {
              nextX = x + 1;
              nextY = y + 1;
            } else if (direction == DIRECTION_ENUM.RIGHT) {
              nextX = x + 1;
              nextY = y - 1;
            }

            if ((!tileInfo[x][nextY] || tileInfo[x][nextY].turnable) && (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable) && (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)) ;else {
              this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT;
              return true;
            }
          } else if (inputDirection === CONTROLLER_ENUM.TURNRIGHT) {
            var _nextX;

            var _nextY;

            if (direction == DIRECTION_ENUM.TOP) {
              _nextX = x + 1;
              _nextY = y - 1;
            } else if (direction == DIRECTION_ENUM.RIGHT) {
              _nextX = x + 1;
              _nextY = y + 1;
            } else if (direction == DIRECTION_ENUM.BOTTOM) {
              _nextX = x - 1;
              _nextY = y + 1;
            } else if (direction == DIRECTION_ENUM.LEFT) {
              _nextX = x - 1;
              _nextY = y - 1;
            }

            if ((!tileInfo[x][_nextY] || tileInfo[x][_nextY].turnable) && (!tileInfo[_nextX][y] || tileInfo[_nextX][y].turnable) && (!tileInfo[_nextX][_nextY] || tileInfo[_nextX][_nextY].turnable)) ;else {
              this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT;
              return true;
            }
          }

          return false;
        };

        _proto.checkBlock = function checkBlock(playerNextX, playerNextY, weaponNextX, weaponNextY) {
          var _DataManager$Instance = DataManager.Instance,
              tileInfo = _DataManager$Instance.tileInfo,
              mapRowCount = _DataManager$Instance.mapRowCount,
              mapColCount = _DataManager$Instance.mapColCount;

          if (playerNextX < 0 || playerNextX >= mapColCount || playerNextY < 0 || playerNextY >= mapRowCount) {
            this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
            return true;
          }

          var playerTile = tileInfo[playerNextX][playerNextY];
          var weaponTile = weaponNextX < 0 || weaponNextX >= mapColCount || weaponNextY < 0 || weaponNextY >= mapRowCount ? null : tileInfo[weaponNextX][weaponNextY];

          if (playerTile && playerTile.moveable && (!weaponTile || weaponTile.turnable)) {
            return false;
          } else {
            this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
            return true;
          }
        };

        return PlayerManager;
      }(EntityManager), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, _defineProperty, _assertThisInitialized, cclegacy, Singleton;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b52b5dPHhpOALBNVUSEArrh", "EventManager", undefined);

      var EventManager = exports('default', /*#__PURE__*/function (_Singleton) {
        _inheritsLoose(EventManager, _Singleton);

        function EventManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Singleton.call.apply(_Singleton, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "eventDic", new Map());

          return _this;
        }

        var _proto = EventManager.prototype;

        _proto.on = function on(eventName, func, ctx) {
          if (this.eventDic.has(eventName)) {
            this.eventDic.get(eventName).push({
              func: func,
              ctx: ctx
            });
          } else {
            this.eventDic.set(eventName, [{
              func: func,
              ctx: ctx
            }]);
          }
        };

        _proto.off = function off(eventName, func) {
          if (this.eventDic.has(eventName)) {
            var index = this.eventDic.get(eventName).findIndex(function (i) {
              return i.func === func;
            });
            index > -1 && this.eventDic.get(eventName).splice(index, 1);
          }
        };

        _proto.emit = function emit(eventName) {
          for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            params[_key2 - 1] = arguments[_key2];
          }

          if (this.eventDic.has(eventName)) {
            this.eventDic.get(eventName).forEach(function (_ref) {
              var func = _ref.func,
                  ctx = _ref.ctx;
              ctx ? func.apply(ctx, params) : func.apply(void 0, params);
            });
          }
        };

        _proto.clear = function clear(eventName) {
          this.eventDic.clear();
        };

        _createClass(EventManager, null, [{
          key: "Instance",
          get: function get() {
            return _Singleton.GetInstance.call(this);
          }
        }]);

        return EventManager;
      }(Singleton));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AttackSubStateMachine2.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c4917yajfdC2ZJ/Q98pmaIt", "AttackSubStateMachine", undefined);

      var BASE_URL = 'texture/player/attack/';
      var AttackSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(AttackSubStateMachine, _DirectionSubStateMac);

        function AttackSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return AttackSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockTurnLeftSubStateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c61c0uZNUFN1qCBzy4AJTUw", "BlockTurnLeftSubStateMachine", undefined);

      var BASE_URL = 'texture/player/blockturnleft/';
      var BlockTurnLeftSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(BlockTurnLeftSubStateMachine, _DirectionSubStateMac);

        function BlockTurnLeftSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, BASE_URL + "top"));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, BASE_URL + "bottom"));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, BASE_URL + "left"));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, BASE_URL + "right"));

          return _this;
        }

        return BlockTurnLeftSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/State.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourceManager.ts', './index3.ts'], function (exports) {
  'use strict';

  var _defineProperty, _asyncToGenerator, cclegacy, AnimationClip, animation, Sprite, ResourceManager, sortSpriteFrame;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      AnimationClip = module.AnimationClip;
      animation = module.animation;
      Sprite = module.Sprite;
    }, function (module) {
      ResourceManager = module.default;
    }, function (module) {
      sortSpriteFrame = module.sortSpriteFrame;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d43feWqYXtB8LJH5xUVs2jB", "State", undefined);

      var ANIMATION_SPEED = 1 / 8;
      /**
       * 1.需要知道aimationClip
       * 2.需要播放動畫的能力 animation
       */

      var State = exports('default', /*#__PURE__*/function () {
        function State(fsm, path, wrapMode) {
          if (wrapMode === void 0) {
            wrapMode = AnimationClip.WrapMode.Normal;
          }

          _defineProperty(this, "animationClip", void 0);

          this.fsm = fsm;
          this.path = path;
          this.wrapMode = wrapMode;
          this.init();
        }

        var _proto = State.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var promise, spriteFrames, track, frames;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    promise = ResourceManager.Instance.loadDir(this.path);
                    this.fsm.waitingList.push(promise);
                    _context.next = 4;
                    return promise;

                  case 4:
                    spriteFrames = _context.sent;
                    this.animationClip = new AnimationClip();
                    track = new animation.ObjectTrack(); // 创建一个向量轨道

                    track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 指定轨道路径，即指定目标对象为 "Foo" 子节点的 "position" 属性

                    frames = sortSpriteFrame(spriteFrames).map(function (item, index) {
                      return [index * ANIMATION_SPEED, item];
                    });
                    track.channel.curve.assignSorted(frames); // 最后将轨道添加到动画剪辑以应用

                    this.animationClip.addTrack(track);
                    this.animationClip.name = this.path;
                    this.animationClip.wrapMode = this.wrapMode;
                    this.animationClip.duration = frames.length * ANIMATION_SPEED;

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.run = function run() {
          var _this$fsm$animationCo, _this$fsm$animationCo2;

          if (((_this$fsm$animationCo = this.fsm.animationComponent) === null || _this$fsm$animationCo === void 0 ? void 0 : (_this$fsm$animationCo2 = _this$fsm$animationCo.defaultClip) === null || _this$fsm$animationCo2 === void 0 ? void 0 : _this$fsm$animationCo2.name) === this.animationClip.name) {
            return;
          }

          this.fsm.animationComponent.defaultClip = this.animationClip;
          this.fsm.animationComponent.play();
        };

        return State;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/level1.ts", ['cc', './index.ts'], function (exports) {
  'use strict';

  var cclegacy, TILE_TYPE_ENUM;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TILE_TYPE_ENUM = module.TILE_TYPE_ENUM;
    }],
    execute: function () {
      cclegacy._RF.push({}, "db61dOTYIxOUrDhJGr+0oWS", "level1", undefined);

      var mapInfo = [[{
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 18,
        type: TILE_TYPE_ENUM.CLIFF_LEFT
      }], [{
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 21,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP
      }, {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 20,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP
      }, {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT
      }], [{
        src: null,
        type: null
      }, {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 18,
        type: TILE_TYPE_ENUM.CLIFF_LEFT
      }], [{
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP
      }, {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP
      }, {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 21,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT
      }], [{
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP
      }, {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR
      }, {
        src: 20,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
      }, {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER
      }], [{
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN
      }, {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
      }, {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT
      }]];
      var level = exports('default', {
        mapInfo: mapInfo
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, resources, SpriteFrame, Singleton;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      Singleton = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dde71iBttZDTIxrwQr0fWXw", "ResourceManager", undefined);

      var ResourceManager = exports('default', /*#__PURE__*/function (_Singleton) {
        _inheritsLoose(ResourceManager, _Singleton);

        function ResourceManager() {
          return _Singleton.apply(this, arguments) || this;
        }

        var _proto = ResourceManager.prototype;

        _proto.loadDir = function loadDir(path, type) {
          return new Promise(function (resolve, reject) {
            resources.loadDir(path, SpriteFrame, function (err, assets) {
              if (err) {
                reject(err);
                return;
              }

              resolve(assets);
            });
          });
        };

        _createClass(ResourceManager, null, [{
          key: "Instance",
          get: function get() {
            return _Singleton.GetInstance.call(this);
          }
        }]);

        return ResourceManager;
      }(Singleton));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Singleton.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ed8aen4AZRBSqQRBQ0XN1nk", "Singleton", undefined);

      var Singleton = exports('default', /*#__PURE__*/function () {
        function Singleton() {}

        Singleton.GetInstance = function GetInstance() {
          if (!this._instance) {
            this._instance = new this();
          }

          return this._instance;
        };

        return Singleton;
      }());

      _defineProperty(Singleton, "_instance", null);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, UITransform, Component, TILE_TYPE_ENUM;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      TILE_TYPE_ENUM = module.TILE_TYPE_ENUM;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "efac8dhIA5KeZH2RhoVOzZ6", "TileManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TILE_WIDTH = exports('TILE_WIDTH', 55);
      var TILE_HEIGHT = exports('TILE_HEIGHT', 55);
      var TileManager = exports('TileManager', (_dec = ccclass('TileManager'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileManager, _Component);

        function TileManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "type", void 0);

          _defineProperty(_assertThisInitialized(_this), "moveable", void 0);

          _defineProperty(_assertThisInitialized(_this), "turnable", void 0);

          return _this;
        }

        var _proto = TileManager.prototype;

        _proto.init = function init(type, spriteFrame, i, j) {
          this.type = type;

          if (this.type === TILE_TYPE_ENUM.WALL_ROW || this.type === TILE_TYPE_ENUM.WALL_COLUMN || this.type === TILE_TYPE_ENUM.WALL_LEFT_TOP || this.type === TILE_TYPE_ENUM.WALL_LEFT_BOTTOM || this.type === TILE_TYPE_ENUM.WALL_RIGHT_TOP || this.type === TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM) {
            this.moveable = false;
            this.turnable = false;
          } else if (this.type === TILE_TYPE_ENUM.CLIFF_CENTER || this.type === TILE_TYPE_ENUM.CLIFF_RIGHT || this.type === TILE_TYPE_ENUM.CLIFF_LEFT) {
            this.moveable = false;
            this.turnable = true;
          } else if (this.type === TILE_TYPE_ENUM.FLOOR) {
            this.moveable = true;
            this.turnable = true;
          }

          var sprite = this.addComponent(Sprite);
          sprite.spriteFrame = spriteFrame;
          var transform = this.getComponent(UITransform);
          transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);
          this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
        };

        return TileManager;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StateMachine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Component, FSM_PARAM_TYPE_ENUM;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      FSM_PARAM_TYPE_ENUM = module.FSM_PARAM_TYPE_ENUM;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "f4fedopyPRGd7cJWZhGFzk7", "StateMachine", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var getInitParamsTrigger = exports('getInitParamsTrigger', function getInitParamsTrigger() {
        return {
          type: FSM_PARAM_TYPE_ENUM.TRIGGER,
          value: false
        };
      });
      var getInitParamsNumber = exports('getInitParamsNumber', function getInitParamsNumber() {
        return {
          type: FSM_PARAM_TYPE_ENUM.NUMBER,
          value: 0
        };
      });
      var StateMachine = exports('StateMachine', (_dec = ccclass('StateMachine'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StateMachine, _Component);

        function StateMachine() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_currentState", null);

          _defineProperty(_assertThisInitialized(_this), "params", new Map());

          _defineProperty(_assertThisInitialized(_this), "stateMachines", new Map());

          _defineProperty(_assertThisInitialized(_this), "animationComponent", void 0);

          _defineProperty(_assertThisInitialized(_this), "waitingList", []);

          return _this;
        }

        var _proto = StateMachine.prototype;

        _proto.getParams = function getParams(paramsName) {
          if (this.params.has(paramsName)) {
            return this.params.get(paramsName);
          }
        };

        _proto.setParams = function setParams(paramsName, value) {
          if (this.params.has(paramsName)) {
            this.params.get(paramsName).value = value;
            this.run();
            this.resetTrigger();
          }
        };

        _proto.getState = function getState(key) {
          return this.stateMachines.get(key);
        };

        _proto.setState = function setState(key, value) {
          this.stateMachines.set(key, value);
        };

        _proto.resetTrigger = function resetTrigger() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.params.entries()), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
                _ = _step$value[0],
                value = _step$value[1];

            if (value.type === FSM_PARAM_TYPE_ENUM.TRIGGER) {
              value.value = false;
            }
          }
        };

        _createClass(StateMachine, [{
          key: "currentState",
          get: function get() {
            return this._currentState;
          },
          set: function set(newState) {
            var _this$_currentState;

            this._currentState = newState;
            (_this$_currentState = this._currentState) === null || _this$_currentState === void 0 ? void 0 : _this$_currentState.run();
          }
        }]);

        return StateMachine;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index3.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, Node, UITransform, Layers;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      UITransform = module.UITransform;
      Layers = module.Layers;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fc63c5IDqtFvoozuv/mqNQT", "index", undefined);

      var createUINode = exports('createUINode', function createUINode(name) {
        if (name === void 0) {
          name = '';
        }

        var node = new Node(name);
        var transform = node.addComponent(UITransform);
        transform.setAnchorPoint(0, 1);
        node.layer = 1 << Layers.nameToLayer('UI_2D');
        return node;
      });
      var randomByRange = exports('randomByRange', function randomByRange(start, end) {
        return Math.floor(start + (end - start) * Math.random());
      });
      var reg = /\((\d+)\)/;

      var getNumberWithinString = function getNumberWithinString(str) {
        var _str$match;

        return parseInt(((_str$match = str.match(reg)) === null || _str$match === void 0 ? void 0 : _str$match[1]) || '0');
      };

      var sortSpriteFrame = exports('sortSpriteFrame', function sortSpriteFrame(spriteFrames) {
        return spriteFrames.sort(function (a, b) {
          return getNumberWithinString(a.name) - getNumberWithinString(b.name);
        });
      });
      var randomByLen = exports('randomByLen', function randomByLen(len) {
        return Array.from({
          length: len
        }).reduce(function (total, item) {
          return total + Math.floor(Math.random() * 10);
        }, '');
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileMapManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourceManager.ts', './index3.ts', './TileManager.ts', './DataManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, cclegacy, _decorator, Component, ResourceManager, createUINode, randomByRange, TileManager, DataManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ResourceManager = module.default;
    }, function (module) {
      createUINode = module.createUINode;
      randomByRange = module.randomByRange;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      DataManager = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "fea0e7mwvlDl6dS5kelv516", "TileMapManager", undefined);

      var ccclass = _decorator.ccclass;
      var TileMapManager = exports('TileMapManager', (_dec = ccclass('TileMapManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileMapManager, _Component);

        function TileMapManager() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = TileMapManager.prototype;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var mapInfo, spriteFrames, i, column, _loop, j, _ret;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    mapInfo = DataManager.Instance.mapInfo;
                    _context.next = 3;
                    return ResourceManager.Instance.loadDir('texture/tile/tile');

                  case 3:
                    spriteFrames = _context.sent;
                    DataManager.Instance.tileInfo = [];
                    DataManager.Instance.mapRowCount = mapInfo.length;
                    DataManager.Instance.mapColCount = mapInfo[0].length;
                    i = 0;

                  case 8:
                    if (!(i < mapInfo.length)) {
                      _context.next = 23;
                      break;
                    }

                    column = mapInfo[i];
                    DataManager.Instance.tileInfo[i] = [];

                    _loop = function _loop(j) {
                      var item = column[j];

                      if (item.src === null || item.type === null) {
                        return "continue";
                      }

                      var node = createUINode();
                      var number = item.src;

                      if ((number === 1 || number === 5 || number === 9) && i % 2 === 0 && j % 2 === 0) {
                        number += randomByRange(0, 4);
                      }

                      var imgSrc = "tile (" + number + ")";
                      var spriteFrame = spriteFrames.find(function (item) {
                        return item.name === imgSrc;
                      }) || spriteFrames[0];
                      var tileManager = node.addComponent(TileManager);
                      var type = item.type;
                      tileManager.init(type, spriteFrame, i, j);
                      DataManager.Instance.tileInfo[i][j] = tileManager;
                      node.setParent(_this.node);
                    };

                    j = 0;

                  case 13:
                    if (!(j < column.length)) {
                      _context.next = 20;
                      break;
                    }

                    _ret = _loop(j);

                    if (!(_ret === "continue")) {
                      _context.next = 17;
                      break;
                    }

                    return _context.abrupt("continue", 17);

                  case 17:
                    j++;
                    _context.next = 13;
                    break;

                  case 20:
                    i++;
                    _context.next = 8;
                    break;

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        return TileMapManager;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DeathSubStateMachine3.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './State.ts', './DirectionSubStateMachine.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, DIRECTION_ENUM, State, DirectionSubStateMachine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DIRECTION_ENUM = module.DIRECTION_ENUM;
    }, function (module) {
      State = module.default;
    }, function (module) {
      DirectionSubStateMachine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff224UBYdhKWa8Wtql4c3AS", "DeathSubStateMachine", undefined);

      var BASE_URL = 'texture/door/death/';
      var DeathSubStateMachine = exports('default', /*#__PURE__*/function (_DirectionSubStateMac) {
        _inheritsLoose(DeathSubStateMachine, _DirectionSubStateMac);

        function DeathSubStateMachine(fsm) {
          var _this;

          _this = _DirectionSubStateMac.call(this, fsm) || this;

          _this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, "" + BASE_URL));

          _this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, "" + BASE_URL));

          _this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, "" + BASE_URL));

          _this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, "" + BASE_URL));

          return _this;
        }

        return DeathSubStateMachine;
      }(DirectionSubStateMachine));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./index.ts', './StateMachine.ts', './Singleton.ts', './ResourceManager.ts', './index3.ts', './State.ts', './SubStateMachine.ts', './DirectionSubStateMachine.ts', './IdleSubStateMachine.ts', './DeathSubStateMachine3.ts', './DoorStateMachine.ts', './AttackSubStateMachine.ts', './TileManager.ts', './DataManager.ts', './TileMapManager.ts', './level1.ts', './level2.ts', './index2.ts', './EventManager.ts', './TurnLeftSubStateMachine.ts', './TurnRightSubStateMachine.ts', './IdleSubStateMachine2.ts', './BlockFrontSubStateMachine.ts', './EntityManager.ts', './BlockTurnLeftSubStateMachine.ts', './BlockTurnRightSubStateMachine.ts', './DeathSubStateMachine.ts', './AttackSubStateMachine2.ts', './PlayerStateMachine.ts', './PlayerManager.ts', './IdleSubStateMachine3.ts', './DeathSubStateMachine2.ts', './WoodenSkeletonStateMachine.ts', './WoodenSkeletonManager.ts', './DoorManager.ts', './BattleManager.ts', './ControllerManager.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});