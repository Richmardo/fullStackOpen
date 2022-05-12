import { useState } from 'react'
const StatisticLine = ({text, value}) => {
  return(
    <h1>{text}: {value}</h1>
  )
}
const Statistics = ({good, neutral, bad, score}) => {
  return (
    <div >
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="average" value={score / (good+neutral+bad)}/>
      <StatisticLine text="positive" value={(good / (good+neutral+bad)) * 100 + "%"}/>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setScore(score + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setScore(score - 1)
  }

  return (
    <div className="App">
      <h1>Give feedback!</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <h1>Statiscitcs:</h1>
      {good || bad || neutral ?  <Statistics good={good} bad={bad} neutral={neutral} score={score}/> : <h1>Nothing!</h1>}
    </div>
  );
}

export default App;
