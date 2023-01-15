import React from 'react'

//这里Pro大写
import PropTypes from 'prop-types'

function Test({ list }) {
  return (
    <div>
      {list.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  )
}

//这里小写
Test.propTypes = {
  //这里大写
  list: PropTypes.array.isRequired,
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Test list={[1, 2, 3]}></Test>
      </div>
    )
  }
}

export default App
