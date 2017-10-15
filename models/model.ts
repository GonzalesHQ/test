
/*

MODELS

*/


/*

	STUFF MODELS

*/

export class Stuff {

	constructor() {
		// code...
	}

	name: string;
	type: string;
	quality: number;
	quantity: number;
	deathChance: number;
	pricePerUnit: number;
	quantityPerUnit: number;

	get popularity() {
		return this.deathChance + this.pricePerUnit + this.quantityPerUnit;
	}

	cut(materialAmount) {
		this.quantity = this.quantity + materialAmount;
		this.quality = this.quality - (Math.floor(Math.random() * 20) + 1);
		this.deathChance = this.deathChance + Math.floor(Math.random() * 20) + 1;
	}
}

export class StuffFactory {
	constructor() {
		
	}

	randomizeUnit(){
		return new Stuff();
	}

	randomizeMediocreUnit(){
		return new Stuff();
	}

	randomizeGoodUnit(){
		return new Stuff();
	}

	randomizeBadUnit(){
		return new Stuff();
	}

	randomizeAlmostPerfectUnit(){
		return new Stuff();
	}

	createBatch(amount) {
		let newBatch = new Array<Stuff>(amount);

		newBatch.forEach(slot => {
			slot = this.randomizeUnit();
		});

		return new Array<Stuff>();
	}
}

export class CutMaterial {

	static names = {
		glass:'',
		flower:''
	}

	constructor(argument) {
		// code...
	}
}

/*

	HOUSE MODELS

*/

export class SafeHouse {

	constructor(argument) {
		// code...
	}

	owner;
	available: boolean;

	compromiseLevel;
	compromised: boolean;
	raidInProgress;
	securityLevel;
	locked;
	
	stock;
	isEmpty;
	maxStock;
	stockLevels;
}

/*

	ACTOR MODELS

*/

export class Actor {

	constructor(argument) {
		// code...
	}

	xPos;
	yPos;
	speed;
	velocity;
	isWalking;
	actorOrientation;

	width;
	height;

	attire;
	stuff;

	get position() {
		return { y: this.yPos, x: this.xPos }
	}

	walkRight() {

	}

	walkLeft() {

	}

	walkUp() {

	}
	walkDown() {

	}

	action(){

	}
}

export class Player extends Actor {

	constructor(argument) {
		super(null);
		// code...
	}
}

export class RivalCourier extends Actor {

	constructor(argument) {
		super(null);
		// code...
	}
}

export class Cop extends Actor {

	constructor(argument) {
		super(null);
		// code...
	}
}

export class Supplier extends Actor {

	constructor(argument) {
		super(null);
		// code...
	}
}

export class Client extends Actor {

	constructor(argument) {
		super(null);
		// code...
	}
}


/*

	MAP/OBSTACLE MODELS

*/

export class MainMap {
	constructor(parameters) {
		
	}
}


export class Obstacle {
	constructor(parameters) {
		
	}
}

export class InteractableObstacle {
	constructor(parameters) {
		
	}
}

export class ObstacleFactory {
	constructor(parameters) {
		
	}
}


/*

	DIALOG MODELS

*/

export class DialogBox {
	constructor(parameters) {
		
	}
}

export class DialogActorImage {
	constructor(parameters) {
		
	}
}

export class DialogPopupYesNo {
	constructor(parameters) {
		
	}
}

export class DialogPopupOptionList {
	constructor(parameters) {
		
	}
}

export class PauseMenu {
	constructor(parameters) {
		
	}
}

