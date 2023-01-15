import React from 'react'

class Test extends React.Component {
  timer = null
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('tiemer start')
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return <div>test</div>
  }
}

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }

  state = {
    count: 0,
    flag: true,
  }
  clickhandler = () => {
    this.setState({
      count: this.state.count++,
      flag: !this.state.flag,
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
    //一般网络请求
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {}

  render() {
    console.log('render')
    return (
      <div>
        this is div
        {this.state.flag ? <Test></Test> : null}
        <button onClick={this.clickhandler}>{this.state.count}</button>
      </div>
    )
  }
}

export default App
