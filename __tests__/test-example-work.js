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
	it('should be a "span" element', () => {
		//expect('Hello').toEqual('Hello');
		//console.log(component.debug());	
		expect(component.type()).toEqual('span');
	});

	it('should contain as many children as there are work examples', () => {
		expect(component.find('ExampleWorkBubble').length).toEqual(myWork.length);
	});

	it('should allow the modal to open and close', () => {
		component.instance().openModal();
		expect(component.instance().state.modalOpen).toBe(true);
		component.instance().closeModal();
		expect(component.instance().state.modalOpen).toBe(false);
	});
}); //ExampleWork Component

describe('ExampleWorkBubble Component', () => {
	
	let mockOpenModalFn = jest.fn();
	let component = shallow(<ExampleWorkBubble exampleSections={myWork[1]} openModal={mockOpenModalFn}/>);	
	let images = component.find('img');

	it('should contain a single "img" element', () => {
		expect(images.length).toEqual(1);
	});

	it('should have the image src set correctly', () => {
		expect(images.node.props.src).toEqual(myWork[1].image.src);
	});

	it('should call the openModal handler when clicked', () => {
		component.find('.section__exampleWrapper').simulate('click');
		expect(mockOpenModalFn).toHaveBeenCalled();
	});
}); //ExampleWorkBubble Component

