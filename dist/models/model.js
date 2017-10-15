"use strict";
/*

MODELS

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*

    STUFF MODELS

*/
var Stuff = /** @class */ (function () {
    function Stuff() {
        // code...
    }
    Object.defineProperty(Stuff.prototype, "popularity", {
        get: function () {
            return this.deathChance + this.pricePerUnit + this.quantityPerUnit;
        },
        enumerable: true,
        configurable: true
    });
    Stuff.prototype.cut = function (materialAmount) {
        this.quantity = this.quantity + materialAmount;
        this.quality = this.quality - (Math.floor(Math.random() * 20) + 1);
        this.deathChance = this.deathChance + Math.floor(Math.random() * 20) + 1;
    };
    return Stuff;
}());
exports.Stuff = Stuff;
var StuffFactory = /** @class */ (function () {
    function StuffFactory() {
    }
    StuffFactory.prototype.randomizeUnit = function () {
        return new Stuff();
    };
    StuffFactory.prototype.randomizeMediocreUnit = function () {
        return new Stuff();
    };
    StuffFactory.prototype.randomizeGoodUnit = function () {
        return new Stuff();
    };
    StuffFactory.prototype.randomizeBadUnit = function () {
        return new Stuff();
    };
    StuffFactory.prototype.randomizeAlmostPerfectUnit = function () {
        return new Stuff();
    };
    StuffFactory.prototype.createBatch = function (amount) {
        var _this = this;
        var newBatch = new Array(amount);
        newBatch.forEach(function (slot) {
            slot = _this.randomizeUnit();
        });
        return new Array();
    };
    return StuffFactory;
}());
exports.StuffFactory = StuffFactory;
var CutMaterial = /** @class */ (function () {
    function CutMaterial(argument) {
        // code...
    }
    CutMaterial.names = {
        glass: '',
        flower: ''
    };
    return CutMaterial;
}());
exports.CutMaterial = CutMaterial;
/*

    HOUSE MODELS

*/
var SafeHouse = /** @class */ (function () {
    function SafeHouse(argument) {
        // code...
    }
    return SafeHouse;
}());
exports.SafeHouse = SafeHouse;
/*

    ACTOR MODELS

*/
var Actor = /** @class */ (function () {
    function Actor(argument) {
        // code...
    }
    Object.defineProperty(Actor.prototype, "position", {
        get: function () {
            return { y: this.yPos, x: this.xPos };
        },
        enumerable: true,
        configurable: true
    });
    Actor.prototype.walkRight = function () {
    };
    Actor.prototype.walkLeft = function () {
    };
    Actor.prototype.walkUp = function () {
    };
    Actor.prototype.walkDown = function () {
    };
    Actor.prototype.action = function () {
    };
    return Actor;
}());
exports.Actor = Actor;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return Player;
}(Actor));
exports.Player = Player;
var RivalCourier = /** @class */ (function (_super) {
    __extends(RivalCourier, _super);
    function RivalCourier(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return RivalCourier;
}(Actor));
exports.RivalCourier = RivalCourier;
var Cop = /** @class */ (function (_super) {
    __extends(Cop, _super);
    function Cop(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return Cop;
}(Actor));
exports.Cop = Cop;
var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return Supplier;
}(Actor));
exports.Supplier = Supplier;
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return Client;
}(Actor));
exports.Client = Client;
/*

    MAP/OBSTACLE MODELS

*/
var MainMap = /** @class */ (function () {
    function MainMap(parameters) {
    }
    return MainMap;
}());
exports.MainMap = MainMap;
var Obstacle = /** @class */ (function () {
    function Obstacle(parameters) {
    }
    return Obstacle;
}());
exports.Obstacle = Obstacle;
var InteractableObstacle = /** @class */ (function () {
    function InteractableObstacle(parameters) {
    }
    return InteractableObstacle;
}());
exports.InteractableObstacle = InteractableObstacle;
var ObstacleFactory = /** @class */ (function () {
    function ObstacleFactory(parameters) {
    }
    return ObstacleFactory;
}());
exports.ObstacleFactory = ObstacleFactory;
/*

    DIALOG MODELS

*/
var DialogBox = /** @class */ (function () {
    function DialogBox(parameters) {
    }
    return DialogBox;
}());
exports.DialogBox = DialogBox;
var DialogActorImage = /** @class */ (function () {
    function DialogActorImage(parameters) {
    }
    return DialogActorImage;
}());
exports.DialogActorImage = DialogActorImage;
var DialogPopupYesNo = /** @class */ (function () {
    function DialogPopupYesNo(parameters) {
    }
    return DialogPopupYesNo;
}());
exports.DialogPopupYesNo = DialogPopupYesNo;
var DialogPopupOptionList = /** @class */ (function () {
    function DialogPopupOptionList(parameters) {
    }
    return DialogPopupOptionList;
}());
exports.DialogPopupOptionList = DialogPopupOptionList;
var PauseMenu = /** @class */ (function () {
    function PauseMenu(parameters) {
    }
    return PauseMenu;
}());
exports.PauseMenu = PauseMenu;
//# sourceMappingURL=model.js.map