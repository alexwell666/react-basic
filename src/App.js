import React from 'react'

import PropTypes from 'prop-types'


function Test ({ list }) {
  return (
    <div>{list.map(item => <p>{item}</p>)}</div>
  )
}


Test.PropTypes = {
  list: PropTypes.array
}

class App extends React.Component {



  render () {


    return (
      <div>
        <Test list={[1, 2]}></Test>

      </div>
    )
  }
}


export default App
