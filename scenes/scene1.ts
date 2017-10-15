import * as models from '../models/model'


export class Scene1 {

    ctx;

    constructor(context) {
        console.log('Scene1 inited');
    }

    start = ctx => {
        console.log('Scene1 start');
        this.ctx = ctx;
        this.drawBackgroundColor();
        this.drawCircle("blue");
    }

    drawBackgroundColor() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, 1280, 720);
    }

    drawCircle(color) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 5;
        this.ctx.arc(400, 400, 100, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}