import React from "react"

const Course = (props) => {

	const Header = (props) => {
		return <h1>{props.course}</h1>
	}

	const Content = (props) => {
		return (
			<>{props.course.parts.map(part => <p key={part.id}> {part.name} {part.exercises} </p>)}</>
		)
	}

	const Total = (props) => {
		let total = 0
		let sum = props.course.parts.reduce(function (previousValue, currentValue) { 
			return previousValue + currentValue.exercises}, total)

		return (
			<h4>Total  of {sum} exercises</h4>	
		)
	}
	
	return (
		<div>
			<Header course={props.course.name} />
			<Content course={props.course} />
			<Total course={props.course}  />
		</div>
	)
}

const App = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2,
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3,
			}
		]
	}

	return <Course course={course} />
}
export default App
