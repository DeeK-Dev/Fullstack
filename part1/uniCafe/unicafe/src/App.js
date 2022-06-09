import { useState } from 'react'

const Feedback = ({ goodClick, neutralClick, badClick }) => {
    return(
        <div>
            <h1>Feedback</h1>
            <Button handler={goodClick} text={"good"}></Button>
            <Button handler={neutralClick} text={"neutral"}></Button>
            <Button handler={badClick} text={"bad"}></Button>
        </div>
    )
}

const Button = ({ handler, text }) => {
    return (
        <button onClick={() => handler(1)}>{text}</button>
    )
}
const Statistics = ({ goodValue, neutralValue, badValue, total, averageValue, percentValue }) => {
    if (total === 0){

        return(
            <div>
            <h1>Statistics</h1>
            Please give feedback using buttons above
            </div>
    )
    }
    return (
        <div>
            <h1>Statistics</h1>
            <StatisticLine statType={goodValue} text={"good"}></StatisticLine>
            <StatisticLine statType={neutralValue} text={"neutral"}></StatisticLine>
            <StatisticLine statType={badValue} text={"bad"}></StatisticLine>
            <StatisticLine statType={total} text={"total"}></StatisticLine>
            <StatisticLine statType={averageValue} text={"average"}></StatisticLine>
            <StatisticLine statType={percentValue} text={"percentage"}></StatisticLine>
        </div>
    )
}

const StatisticLine = ({ statType, text }) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{statType}</td>
            </tr>
        </tbody>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incGood = (newValue) => setGood(good+newValue)
    const incNeutral = (newValue) => setNeutral(neutral+newValue)
    const incBad = (newValue) => setBad(bad+newValue)

    return (
        <div>
            <Feedback
                goodClick={incGood}
                neutralClick={incNeutral}
                badClick={incBad}>
            </Feedback>

            <Statistics
                goodValue = {good}
                neutralValue = {neutral}
                badValue={bad}
                total = {good + neutral + bad}
                averageValue = {good + neutral + bad/3}
                percentValue = {(good*100)/(good+neutral+bad)}
            >
            </Statistics>
        </div>
    )
}

export default App
