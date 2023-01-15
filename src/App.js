import React from 'react'

import PropTypes from 'prop-types'


function Test ({ list }) {
  return (
    <div>{list.map(item => <p>{item}</p>)}</div>
  )
}


Test.propTypes = {
  list: PropTypes.array.isRequired
}

class App extends React.Component {



  render () {


    return (
      <div>
        <Test list={[1, 2, 3]}></Test>

      </div>
    )
  }
}


export default App
