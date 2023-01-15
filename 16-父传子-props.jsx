import React from 'react'

//App父组件 son 子组件

// function Son (props) {
//   //props是一个对象，存着通过父组件传入 的所有数据
//   console.log(props)

//   const { list, userInfo, getMes, child } = props
//   return (
//     <>
//       <div>
//         函数子组件，{list.map(item => <p key={item}>{item}</p>)}
//         {userInfo.name}

//         <button onClick={getMes}>触发</button>
//         {child}
//       </div>
//     </>
//   )
// }

// function Son (props) {
//   //props是一个对象，存着通过父组件传入 的所有数据
//   console.log(props)

//   const { list, userInfo, getMes, child } = props
//   return (
//     <>
//       <div>
//         函数子组件，{list.map(item => <p key={item}>{item}</p>)}
//         {userInfo.name}

//         <button onClick={getMes}>触发</button>
//         {child}
//       </div>
//     </>
//   )
// }

function Son({ list, userInfo, getMes, child }) {
  return (
    <div>
      this is child Component
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}
      {userInfo.name}
      <button onClick={getMes}>call the parent function of component</button>
      {child}
    </div>
  )
}

// class SonC extends React.Component {
//   render () {
//     return (
//       <div>类子组件,{this.props.msg}</div>
//     )
//   }
// }

class App extends React.Component {
  state = {
    list: [1, 2, 3],
    userInfo: {
      name: 'alex',
      age: 20,
    },
  }

  getMes = () => {
    console.log('父组件中的函数')
  }

  render() {
    return (
      <div>
        {/* 子组件上绑定属性 属性明可以自定义  */}

        <Son
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMes={this.getMes}
          child={<span>this is span</span>}></Son>
      </div>
    )
  }
}

export default App
