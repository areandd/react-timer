import React from "react";

//create your first component
function Home() {
	const [time, setTime] = React.useState(0);
	const [timerOn, SetTimeOn] = React.useState(false);

	React.useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime((previousTime) => previousTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<div className="application">
			<div>
				<span>
					{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
				</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
			</div>
			<div>
				{!timerOn && time === 0 && (
					<button onClick={() => setTimeOn(true)}>Start</button>
				)}
				{timerOn && (
					<button onClick={() => setTimeOn(false)}>Stop</button>
				)}
				{!timerOn && time !== 0 && (
					<button onClick={() => setTimeOn(true)}>Resume</button>
				)}
				{timerOn && time > 0 && (
					<button onClick={() => setTimeOn(0)}>Reset</button>
				)}
			</div>
		</div>
	);
}

export default Home;
