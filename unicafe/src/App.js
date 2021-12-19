import React, { useState } from "react";

const Header = (props) => {
	return <h1>{props.title}</h1>;
};

const Button = (props) => {
	return <button onClick={props.event}>{props.text}</button>;
};

const StatisticLine = (props) => {
	return (
		<tr>
			<td>{props.category}</td>
			<td>{props.value}</td>
		</tr>
	);
};

const Statistics = (props) => {
	if (props.valueAll === 0) {
		return <>No feedback given</>;
	}
	return (
		<table>
			<tbody>
				<StatisticLine
					category="good"
					value={props.valueGood}
				/>
				<StatisticLine
					category="neutral"
					value={props.valueNeutral}
				/>
				<StatisticLine
					category="bad"
					value={props.valueBad}
				/>
				<StatisticLine
					Display
					category="all"
					value={props.valueAll}
				/>
				<StatisticLine
					category="average"
					value={props.valueAverage}
				/>
				<StatisticLine
					category="positive"
					value={props.valuePositive}
				/>
			</tbody>
		</table>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const all = good + neutral + bad;
	const percentagePositives = (100 * good) / all;
	const average = (good - bad) / all;

	const feedback = "give feedback";
	const statistics = "statistics";

	const handleGoodClick = (props) => {
		return setGood(1 + good);
	};

	const handleNeutralClick = (props) => {
		return setNeutral(1 + neutral);
	};

	const handleBadClick = (props) => {
		return setBad(1 + bad);
	};

	return (
		<>
			<div>
				<Header title={feedback} />
				<Button event={handleGoodClick} text="good" />
				<Button
					event={handleNeutralClick}
					text="neutral"
				/>
				<Button event={handleBadClick} text="bad" />
				<Header title={statistics} />
			</div>

			<Statistics
				valueGood={good}
				valueNeutral={neutral}
				valueBad={bad}
				valueAll={all}
				valueAverage={average}
				valuePositive={percentagePositives}
			/>
		</>
	);
};

export default App;
