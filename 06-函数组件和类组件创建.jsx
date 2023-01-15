import React from 'react'

//函数组件创建与渲染
//首字母大写
//必须有返回值

function Hey() {
  const clickHandler = (e) => {
    e
    console.log('something click', e)
  }
  return <div onClick={clickHandler}>Hey</div>
}

//类组件创建与渲染
class HeyComponent extends React.Component {
  //该写法this指向当前组件实例对象
  clickHandler = () => {
    console.log('class something click')
  }

  render() {
    return <div onClick={this.clickHandler}>this is class component</div>
  }
}

function App() {
  return (
    <div className="App">
      <Hey />
      <Hey></Hey>
      <HeyComponent></HeyComponent>
    </div>
  )
}

export default App
