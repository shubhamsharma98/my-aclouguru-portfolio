import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

const myWork = [
	{
		'title': 'Work Example',
		'image': {
			'desc': 'example screenshot of project involving code',
			'src': 'images/example1.png',
			'comment': ''
		}
	},
	{
		'title': 'Portfolio Boilerplate',
		'image': {
			'desc': 'A Serverless Portfolio',
			'src': 'images/example2.png',
			'comment': ''
		}
	}
];

//describe let us write a suite of tests
describe('ExampleWork Component', () => {

	let component = shallow(<ExampleWork work={myWork}/>);

	//what should our component do? 
	it('should be a "section" element', () => {
		//expect('Hello').toEqual('Hello');
		//console.log(component.debug());	
		expect(component.type()).toEqual('section');
	});

	it('should contain as many children as there are work examples', () => {
		expect(component.find('ExampleWorkBubble').length).toEqual(myWork.length);
	})
}); //ExampleWork Component

describe('ExampleWorkBubble Component', () => {
	
	let component = shallow(<ExampleWorkBubble exampleSections={myWork[1]}/>);	
	let images = component.find('img');
	console.log(component.debug);
	console.log(images.debug);

	it('should contain a single "img" element', () => {
		expect(images.length).toEqual(1);
	});

	it('should have the image src set correctly', () => {
		expect(images.node.props.src).toEqual(myWork[1].image.src);
	});
}); //ExampleWorkBubble Component

