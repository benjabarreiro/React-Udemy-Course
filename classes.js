/* properties are like "variables" attached to classes/objects */
/* methods are like functions attached to classes/objects */

class Human {
	constructor() {
		this.gender = 'male';
	}

	myProperty = 'value'; // alternative to constructor function

	printGender() {
		console.log(this.gender);
	}

	myMethod = () => {} //arrow function alternative
}

class Person extends Human {
	constructor() {
		super();
		this.name = 'Max';
	}

	printMyName() {
		console.log(this.name);
	}
}

const person = new Person();
person.printMyName();
person.printGender();