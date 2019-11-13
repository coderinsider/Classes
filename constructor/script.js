
console.info('Hello, there is some information for you');
class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color  = color;
	}

	carStats() {
		return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
	}

	// Static Methods and usuage
	static totalDoors(car1, car2) {
		const doors1 = car1.doors;
		const doors2 = car2.doors;
		return doors1 + doors2;
	}
}
// Constructor super usuage
class SUV extends Car {
	constructor(doors, engine, color, brand, carStats) {
		super(doors, engine, color, carStats);	
		this.brand = brand;
		this.wheels = 4;
		this.ac     = true;
	}
	myBrand() {
		return console.log(`This SUV is a ${this.brand}`);
	}
}

const cx5 = new SUV(4, 'V6', 'red', 'mazda');
console.log(cx5.myBrand());
// Static Methods and usuage
// const civic = new Car(3, 'V4', 'black');
// console.log(cx5);
// console.log(cx5.carStats());
// Static Methods and usuage
// console.log(civic);
// console.log(civic.carStats());
// console.log(Car.totalDoors(cx5,civic));
// There is hoisting explain
function sayHi() {
	console.log('Hello this function can be called anywhere!');
}
sayHi();