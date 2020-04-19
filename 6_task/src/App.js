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
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui tellus, malesuada nec maximus sed, dignissim et purus. Quisque commodo tellus et nunc varius, ut sodales dui mattis. Morbi et condimentum arcu. In eget molestie velit. Duis aliquet, ex id ornare mollis, felis turpis egestas arcu, at auctor enim lacus.',
		img: 'https://source.unsplash.com/featured/?car',
	},
	{
		id: 2,
		title: 'Lorem ipsum',
		author: 'Matt Joe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet feugiat metus, eget suscipit erat. Quisque volutpat dapibus risus, et dapibus sem mattis at. Duis porttitor sodales ligula, eu lobortis nisl iaculis vel. Vivamus lobortis lorem quis ex congue.',
		img: 'https://source.unsplash.com/featured/?truck',
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor sit',
		author: 'Richard Joe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non justo enim. Proin nibh tortor, interdum ut magna vel, porta tristique lacus. Praesent eget facilisis sapien. Praesent velit augue, interdum id massa non, cursus rhoncus.',
		img: 'https://source.unsplash.com/featured/?scooter',
	},
	{
		id: 4,
		title: 'Lorem ipsum dolor',
		author: 'Carl Joe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra, arcu et tincidunt vestibulum, tellus velit tincidunt leo, nec vestibulum dolor orci id tortor. Aenean venenatis magna id urna blandit, vel imperdiet elit accumsan. Fusce efficitur vel quam.',
		img: 'https://source.unsplash.com/featured/?bicycle',
	},
	{
		id: 5,
		title: 'Lorem',
		author: 'Gary Joe',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit mauris, commodo ac ornare non, iaculis id quam. Fusce a lectus vitae magna ultricies lobortis. Curabitur mi enim, tincidunt non fringilla non, commodo ullamcorper dui. Fusce mattis eget eros sit amet fringilla.',
		img: 'https://source.unsplash.com/featured/?vespa',
	},
];

class App extends Component {
	state = {
		cards: cards,
		likes: 0
  };
  
  removeHandler = removeId => {
    const myOldCards = [...this.state.cards];
    myOldCards.splice(removeId, 1);
    this.setState({ cards: myOldCards });
	}
	
	addLikes = id => {
		this.setState({
			likes: this.state.likes + 1,
		})
	};

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
					likes={this.addLikes.bind(this, index)}
					totalLikes={this.state.likes}
				/>
			);
		});

		return <div className="cards">{cardsList}</div>;
	}
}

export default App;
