import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';

const getRandomInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
	state = {
		score: 0,
		current: 0,
		showGameOver: false,
		rounds: 0,
		endMessage: '',
	};

	pace = 1500;
	timer = undefined;

	next = () => {
		if (this.state.rounds >= 2) {
			this.endHandler();
			return;
		}

		let nextActive = undefined;

		do {
			nextActive = getRandomInteger(1, 4);
		} while (nextActive === this.state.current);

		this.setState({
			current: nextActive,
			rounds: this.state.rounds + 1,
		});

		this.pace *= 0.97;
		this.timer = setTimeout(this.next, this.pace);
		console.log(this.state.current);
	};

	clickHandler = circleID => {
		let audio = new Audio('/sheep_lamb.mp3');

		console.log('Clicked', circleID);

		if (this.state.current !== circleID) {
			this.endHandler();
			return;
		}

		this.setState({
			score: this.state.score + 1,
			rounds: 0,
		});

		audio.play();
	};

	startHandler = () => {
		this.next();
	};

	endHandler = () => {
		let audio = new Audio('/sheep.mp3');
		clearTimeout(this.timer);

		let endScore = undefined;

		if (this.state.score <= 3) {
			endScore = 'You caught less than four sheep this time. Go catch some more sheep!';
		}

		if (this.state.score > 4 && this.state.score <= 15) {
			endScore = 'You caught quite many sheep. Go catch some more!';
		}

		if (this.state.score > 15  && this.state.score <= 20) {
			endScore = 'You caught a lot of sheep. Well done!';
    }
    
    if (this.state.score > 20) {
			endScore = 'Amazing! You caught more than twenty sheep. Not many can do that.';
    }

		this.setState({
			endMessage: endScore,
			showGameOver: true,
		});

		audio.play();
	};

	render() {
		return (
			<div className="speedgame">
				<h1>Catch the Sheep</h1>
				<p>
					You have caught <span>{this.state.score}</span> sheep
				</p>
				<main>
					<Circle
						active={this.state.current === 1}
						buttonColor="#22C1C3"
						myClick={this.clickHandler.bind(this, 1)}
					/>
					<Circle
						active={this.state.current === 2}
						buttonColor="#22C1C3"
						myClick={this.clickHandler.bind(this, 2)}
					/>
					<Circle
						active={this.state.current === 3}
						buttonColor="#22C1C3"
						myClick={this.clickHandler.bind(this, 3)}
					/>
					<Circle
						active={this.state.current === 4}
						buttonColor="#22C1C3"
						myClick={this.clickHandler.bind(this, 4)}
					/>
				</main>
				<button onClick={this.startHandler}>Start game</button>
				<button onClick={this.endHandler}>End game</button>
        {this.state.showGameOver && <GameOver score={this.state.score} endMessage={this.state.endMessage}/>}
			</div>
		);
	}
}

export default App;
