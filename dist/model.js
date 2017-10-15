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
var Actor = /** @class */ (function () {
    function Actor(argument) {
        // code...
    }
    return Actor;
}());
var Stuff = /** @class */ (function () {
    function Stuff(argument) {
        // code...
    }
    Object.defineProperty(Stuff.prototype, "popularity", {
        // popularity: number;
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
    Stuff.prototype.createBatch = function () {
        return new Array();
    };
    return Stuff;
}());
var CutMaterial = /** @class */ (function () {
    function CutMaterial(argument) {
        // code...
    }
    return CutMaterial;
}());
var SafeHouse = /** @class */ (function () {
    function SafeHouse(argument) {
        // code...
    }
    return SafeHouse;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return Player;
}(Actor));
var RivalCourier = /** @class */ (function (_super) {
    __extends(RivalCourier, _super);
    function RivalCourier(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return RivalCourier;
}(Actor));
var Cop = /** @class */ (function (_super) {
    __extends(Cop, _super);
    function Cop(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return Cop;
}(Actor));
var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier(argument) {
        return _super.call(this, null) || this;
        // code...
    }
    return Supplier;
}(Actor));
//# sourceMappingURL=model.js.map