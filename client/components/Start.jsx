import React, { useState } from 'react'

import { Link } from 'react-router-dom'

function Start (props) {
  const [playerNumbers, setPlayerNumbers] = useState(2)
  const players = [1, 2]

  function handleChange (e) {
    setPlayerNumbers(e.target.value)
  }
  function handleSubmit (e) {
    e.preventDefault()
    for (let i = 1; i <= playerNumbers; i++) {
      players.push(i)
    }
  }
  console.log(players.length)
  console.log('array', players)
  return (
    <div className='start'>
      { players.length === 0
        ? <form onSubmit={handleSubmit}>
          <label htmlFor='players'>Number of players</label>
          <select onChange={(value) => handleChange(value)} name='players' id='players'>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
          </select>
          <button>Add Players</button>
        </form>
        : <form>
          { players.map((player) => {
            <label htmlFor={player}>
              <input id={player} nam={player} key={player} type="text" placeholder='player name'/>
            </label>
          })}
          <Link to={'/scorecard'}>
            Start Scoring
          </Link>
        </form>
      }

    </div>
  )
}

export default Start
