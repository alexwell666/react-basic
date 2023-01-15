import React from 'react'

//函数组件创建与渲染
//首字母大写
//必须有返回值

function Hey() {
  const clickHandler = (e) => {
    //consume default event, if so the event do not going
    e.preventDefault()
    console.log('something click', e)
  }
  // return <div onClick={clickHandler}>Hey</div>
  return (
    <div>
      <a onClick={clickHandler} href="https://www.google.com">
        google
      </a>
    </div>
  )
}

//传递自定义参数
//1、只需一个额外参数 2、{clickHndler}->{()=>clickhandler()}
function Hey2() {
  const clickHandler = (e, msg) => {
    console.log('something click', e, msg)
  }
  return <div onClick={(e) => clickHandler(e, 'this is msg')}>click me</div>
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
      <Hey2></Hey2>
    </div>
  )
}

export default App
