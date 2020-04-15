import React, { Component } from 'react';
// import Lecture from './Lecture/Lecture';
// import MapMethod from './Lecture/MapMethod';
import Post from './Post/Post';

const cards = [
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet',
		author: 'John Joe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit vel metus at commodo. Class.',
		img: 'https://source.unsplash.com/featured/?car',
	},
	{
		id: 2,
		title: 'Lorem ipsum',
		author: 'Matt Joe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi.',
		img: 'https://source.unsplash.com/featured/?truck',
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor sit',
		author: 'Richard Joe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper velit tempor.',
		img: 'https://source.unsplash.com/featured/?scooter',
	},
	{
		id: 4,
		title: 'Lorem ipsum dolor',
		author: 'Carl Joe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet.',
		img: 'https://source.unsplash.com/featured/?bicycle',
	},
	{
		id: 5,
		title: 'Lorem',
		author: 'Gary Joe',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: 'https://source.unsplash.com/featured/?vespa',
	},
];

class App extends Component {
	state = {
		cards: cards,
  };
  
  removeHandler = removeId => {
    const myOldCards = [...this.state.cards];
    myOldCards.splice(removeId, 1);
    this.setState({ cards: myOldCards });
  }

	render() {
		const cardsList = this.state.cards.map((card, index) => {
			return (
        <Post
          onclick={this.removeHandler.bind(this, index)}
					key={card.id}
					title={card.title}
					author={card.author}
					description={card.description}
					img={card.img}
				/>
			);
		});

		return <div className="cards">{cardsList}</div>;
	}
}

export default App;
