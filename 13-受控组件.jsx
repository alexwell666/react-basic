import React from 'react'

class Counter extends React.Component {
  //1声明用来控制input value的react组件自己的状态
  state = {
    message: 'this is message',
  }

  //回调函数
  inputChange = (e) => {
    console.log('change done', e)
    //拿到输入框的值后给state中的message
    this.setState({
      message: e.target.value,
    })
  }

  render() {
    return (
      //2给input框的value属性绑定react state
      //3给input框绑定一个change事件 可以拿到当前输入框的数据
      <input
        type="text"
        value={this.state.message}
        onChange={this.inputChange}
      />
    )
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
