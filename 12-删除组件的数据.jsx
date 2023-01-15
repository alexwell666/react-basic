import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'jack',
      age: '10',
    },
  }

  changeCount = () => {
    //不能直接修改，必修通过setState
    // this.setState({
    //   count: this.state.count + 1,
    // })

    // this.setState({
    //   list: [...this.state.list, 4, 5]
    // })

    // this.setState({
    //   person: {
    //     ...this.state.person,
    //     name: 'rose'
    //   }
    // })

    //合并修改
    // this.setState({
    //   list: [...this.state.list, 4, 5],
    //   person: {
    //     ...this.state.person,
    //     name: 'rose'
    //   }
    // })

    //删除 -filter

    this.setState({
      list: this.state.list.filter((item) => item !== 2),
    })
  }

  render() {
    return (
      <>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div>{this.state.person.name}</div>
        <button onClick={this.changeCount}>{this.state.count}--click</button>
      </>
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
