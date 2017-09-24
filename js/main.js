import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
	{
		'title': 'Work Example',
		'href': 'https://example.com',
		'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error in ipsam facere distinctio, explicabo dolores excepturi deleniti deserunt praesentium ducimus architecto corporis eligendi, nisi inventore quasi natus, consectetur vitae facilis.',
		'image': {
			'desc': 'example screenshot of project involving code',
			'src': 'images/example1.png',
			'comment': ''
		}
	},
	{
		'title': 'Portfolio Boilerplate',
		'href': 'https://example.com',
		'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error in ipsam facere distinctio, explicabo dolores excepturi deleniti deserunt praesentium ducimus architecto corporis eligendi, nisi inventore quasi natus, consectetur vitae facilis.',
		'image': {
			'desc': 'A Serverless Portfolio',
			'src': 'images/example2.png',
			'comment': ''
		}
	},
	{
		'title': 'Work Example',
		'href': 'https://example.com',
		'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error in ipsam facere distinctio, explicabo dolores excepturi deleniti deserunt praesentium ducimus architecto corporis eligendi, nisi inventore quasi natus, consectetur vitae facilis.',
		'image': {
			'desc': 'example screenshot of project involving cats',
			'src': 'images/example3.png',
			'comment': `"Some multiline 
						comment"`
		}
	}
];
ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));