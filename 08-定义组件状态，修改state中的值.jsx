import React from 'react'

class TestComponent extends React.Component {
  //component state
  state = {
    name: 'alex',
  }

  changeName = () => {
    //edit state's name
    //cannot
    this.setState({
      name: 'jonh',
    })
  }
  render() {
    return (
      <div>
        this is test Component curentName为{this.state.name}
        <button onClick={this.changeName}>edit the name</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <TestComponent></TestComponent>
    </div>
  )
}

export default App
/**
 * 1组件为原生js类或函数
 * 2定义状态需通过state 实例属性的方法 名称为state
 * 3修改state中的任何属性 不可以直接赋值 需走setState方法 、
 * 4this 容易出现指向问题
 */
