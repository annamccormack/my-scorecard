import React from 'react'

function AddScores (props) {
  const { players } = props

  function updateScore () {
  }

  function handleClick () {
  // dispatch scores & load scorecard
  }

  return (
    <div className='addScores'>
      {players.map((player) => {
        return (
          <input
            key={player.id}
            value={player}
            onChange={updateScore}/>
        )
      })}
      <button onClick={handleClick}>
        Add Scores
      </button>
    </div>
  )
}

export default AddScores
