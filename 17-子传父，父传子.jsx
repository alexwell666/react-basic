import React from 'react'

//App son
//父传子 pros 函数
//子传父 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参
//传入即可

function Son(props) {
  const { getSonMsg } = props

  function clickHandler() {
    const sonMsg = 'this is from child msg'
    getSonMsg(sonMsg)
  }

  return (
    <div>
      this is con component
      <button onClick={clickHandler}>button</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    list: [1, 2, 3],
  }

  //prepare a function for pass to child component
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }

  render() {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg}></Son>
      </div>
    )
  }
}

export default App
