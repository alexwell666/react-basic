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

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    return (
      <div>
        this is div
        <button onClick={this.clickhandler}>{this.state.count}</button>
      </div>
    )
  }
}

export default App
