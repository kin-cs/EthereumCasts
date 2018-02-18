const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // here, constructor function/a class
const web3 = new Web3(ganache.provider());

// To create the interface (ABI) and the bytecode by compile.js
const { interface, bytecode } = require('../compile');


let accounts;
let inbox;

beforeEach(async() => {
	// Get a list of all accounts
	accounts = await web3.eth.getAccounts();
		// "then function with Promise" .then(fetchedAccounts => { // asynchronous calls in JavaScript has been with callbacks
		// 	console.log(fetchedAccounts);
		// });

	// Use one of those accounts to deploy
	// the contract
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments: ['Hi there!'] })
		.send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		console.log(inbox);
	});
});

//// Testing code for using Mocha
// class Car {
// 	park() {
// 		return 'stopped';
// 	}

// 	drive() {
// 		return 'vroom';
// 	}
// }

// let car;  // make 'car' as the global variable, and let it be changed afterwards

// beforeEach(() => {
// 	car = new Car();  // now the car is a global var
// });

// describe('Car Test', () => {
// 	it('Testing park function', () => {
// 		assert.equal(car.park(), 'stopped');
// 	});

// 	it('Testing a car can drive', () => {
// 		assert.equal(car.drive(), 'vroom');
// 	});
// });
