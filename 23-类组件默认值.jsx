import React from 'react'

import PropTypes from 'prop-types'

class Test extends React.Component {
  static defaultProps = {
    pageSize: 10,
  }
  render() {
    return <div>{this.props.pageSize}</div>
  }
}
// Test.defaultProps = {
//   pageSize: 10
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Test></Test>
      </div>
    )
  }
}

export default App
