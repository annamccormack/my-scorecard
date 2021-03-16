import React from 'react'

import { Link } from 'react-router-dom'

function ScoreCard (props) {
  const { players } = props
  const runningTotal = '0'
  
  function handleClick () {
    // load AddScores component
  }

  return (

    <div className='scorecard'>
      <table>
        <thead>
          <tr>
            <td role='columnheader'>Player</td>
            <td role='columnheader'>Score</td>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <tr key={player}>
                <td>{player}</td>
                <td>{runningTotal}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Link to={'/addscores'}>Score Round</Link>
    </div>
  )
}

export default ScoreCard
