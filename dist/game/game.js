var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.frameCount = 0;
        this.end = function () {
            _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
            console.log('Game ended');
        };
        this.gameLoop = function () {
            if (_this.frameCount >= 400) {
                console.log('ending game...');
                _this.end();
                return;
            }
            requestAnimationFrame(_this.gameLoop);
            _this.frameCount++;
            console.log('called. Frame = ' + _this.frameCount);
            _this.drawBackgroundColor();
            _this.drawCircle("blue");
            _this.drawFrameCount();
        };
        console.log('game started');
    }
    Game.prototype.init = function () {
        this.getCanvas();
        this.gameLoop();
    };
    Game.prototype.getCanvas = function () {
        this.canvas = document.getElementById('cnvs');
        this.ctx = this.canvas.getContext("2d");
    };
    Game.prototype.drawBackgroundColor = function () {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, 1280, 720);
    };
    Game.prototype.drawCircle = function (color) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 5;
        this.ctx.arc(400, 400, 100, 0, 2 * Math.PI);
        this.ctx.stroke();
    };
    Game.prototype.drawFrameCount = function () {
        this.ctx.fillStyle = "purple";
        this.ctx.font = '48px serif';
        this.ctx.fillText(this.frameCount.toString(), 10, 50);
    };
    return Game;
}());
var game = new Game();
game.init();
console.log('EOF');
//# sourceMappingURL=game.js.map