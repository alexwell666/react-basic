import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0,
  }

  changeCount = () => {
    //不能直接修改，必修通过setState
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return <button onClick={this.changeCount}>{this.state.count}--click</button>
  }
}

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

export default App
