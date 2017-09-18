const assert = chai.assert;

//bdd = behaviour driven development
mocha.ui('bdd');
mocha.reporter('html');

describe('Example tests', () => {
	//here is one task that asserts three different things 
	it('Proved that the Math works', () => {
		assert.equal(3+2, 5, 'Math Works!');
		assert.notEqual(3+2, 6, 'Math still works!');
		assert.closeTo(Math.PI, 3, 0.2, 'PI is close to 3');
	});

	it('Found our component', () => {
		assert.isDefined(MessageBox, 'Our MessageBox component is defined.');	
	});

	it('Let us test a function', () => {
		let myName = 'Shubham';
		const greet = (name) => {
			return 'Hello, ' + name + '!';
		}
		assert.include(greet(myName), myName, 'Greeting includes name');
	});

}); //Example tests

describe('Document tests', () => {
	it('Rendered an emmpty message box', () => {
		let msgBox = document.querySelector('.messageBox');
		assert.isDefined(msgBox, 'MessageBox is defined in the DOM.');
		assert.include(msgBox.classList.value, 'hidden', 'MessageBox is hidden.');
		assert.equal(msgBox.innerText, '', 'MessageBox is empty.');
	});

	it('Rendered an error when Name is empty', () => {
		let msgBox = document.querySelector('.messageBox');
		let button = document.querySelector('#inputButton');
		button.click();
		assert.include(msgBox.classList.value, 'error', 'MessageBox type is error.');
	})
}); //Document tests

mocha.run();