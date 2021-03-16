import React from 'react'
import { Route } from 'react-router-dom'

import Start from './Start'
import Scorecard from './Scorecard'
import AddScores from './AddScores'

const App = () => {
  return (
    <div className='app'>
      <h1 className='appName'>My Scorecard</h1>
      <Route exact path='/' component={Start}/>
      <Route path='/scorecard/:players' component={Scorecard}/>
      <Route path ='/addscores' component={AddScores}/>
    </div>
  )
}

export default App
