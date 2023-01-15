import React, { createRef } from 'react'

//App父组件 son 子组件

function Son(props) {
  //props是一个对象，存着通过父组件传入 的所有数据
  return <div>函数子组件，{props.msg}</div>
}

class SonC extends React.Component {
  render() {
    return <div>类子组件,{this.props.msg}</div>
  }
}

class App extends React.Component {
  state = {
    message: 'this is message',
  }

  render() {
    return (
      <div>
        {/* 子组件上绑定属性 属性明可以自定义  */}

        <Son msg={this.state.message}></Son>
        <SonC msg={this.state.message}></SonC>
      </div>
    )
  }
}

export default App
