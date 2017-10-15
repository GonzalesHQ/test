class Game {

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    frameCount = 0;

    constructor() {
        console.log('game started');
    }

    init() {
        this.getCanvas();
        this.gameLoop();
    }

    end = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        console.log('Game ended');
    }

    getCanvas() {
        this.canvas = <HTMLCanvasElement>document.getElementById('cnvs');
        this.ctx = this.canvas.getContext("2d");
    }

    gameLoop = () => {
        if (this.frameCount >= 400) {
            console.log('ending game...');
            this.end();
            return;
        }

        requestAnimationFrame(this.gameLoop);
        this.frameCount++;
        console.log('called. Frame = '+ this.frameCount);
        this.drawFrameCount();
    }

    drawFrameCount(){
        this.ctx.fillStyle = "purple";
        this.ctx.font = '48px sans-serif';
        this.ctx.fillText(this.frameCount.toString(), 10,50);
    }
}

const game = new Game();

game.init();

console.log('EOF');
