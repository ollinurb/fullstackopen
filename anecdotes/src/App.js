import React, { useState } from "react";

const Button = (props) => {
	return <button onClick={props.event}>{props.text}</button>;
};

const Anecdote = (props) => {
	return <p>{props.anecdotes[props.selected]}</p>;
};

const Votes = (props) => {
	return <p>has {props.votes[props.selected]} votes</p>;
};

const Title = (props) => {
	return <h1>{props.title}</h1>;
};

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
	];

	const [selected, setSelected] = useState(0);

	const randomNumber = () => {
		return Math.floor(Math.random() * 7);
	};
	const handleNextClick = () => {
		setSelected(randomNumber);
	};

	const [points, setPoints] = useState(new Uint8Array(7));
	const copy = [...points];

	const maxVotes = Math.max(...copy);

	const bestAnecdoteIndex = copy.indexOf(maxVotes);

	const handleVoteClick = () => {
		copy[selected] += 1;
		setPoints(copy);
		console.log(copy);
		console.log("max votes", copy.indexOf(Math.max(...copy)));
	};

	return (
		<div>
			<Title title="Anecdote of the day" />
			<Anecdote anecdotes={anecdotes} selected={selected} />
			<p>{console.log("anecdote", selected)}</p>
			<Votes votes={copy} selected={selected} />
			<Button event={handleNextClick} text="next anecdote" />
			<p>{console.log("votes", copy)}</p>
			<Button event={handleVoteClick} text="vote" />
			<Title title="Anecdote with most votes" />
			<Anecdote
				anecdotes={anecdotes}
				selected={bestAnecdoteIndex}
			/>
			<Votes votes={copy} selected={bestAnecdoteIndex} />
		</div>
	);
};
export default App;
