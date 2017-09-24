import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

const myExample = {
	'title': 'Work Example',
	'href': 'https://example.com',
	'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error in ipsam facere distinctio, explicabo dolores excepturi deleniti deserunt praesentium ducimus architecto corporis eligendi, nisi inventore quasi natus, consectetur vitae facilis.',
	'image': {
		'desc': 'example screenshot of project involving code',
		'src': 'images/example1.png',
		'comment': ''
	}
};

describe('ExampleWorkModal Component', () => {

	let component = shallow(<ExampleWorkModal example={myExample} 
		open={false}/>);
	let openComponent = shallow(<ExampleWorkModal example={myExample} 
		open={true}/>);
	let anchors = component.find('a');

	it('should contain a single "a" element', () => {
		expect(anchors.length).toEqual(1);
	});

	it('should link to our project', () => {
		expect(anchors.node.props.href).toEqual(myExample.href);
	});

	it('should have the modal class set correctly', () => {
		expect(component.find('.background--skyBlue').hasClass('modal--closed')).toBe(true);
		expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
	})
});
