import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }

  state = {
    count: 0,
  }
  clickhandler = () => {
    this.setState({
      count: this.state.count++,
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
    //一般网络请求
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.clickhandler}>{this.state.count}</button>
        this is div
      </div>
    )
  }
}

export default App
