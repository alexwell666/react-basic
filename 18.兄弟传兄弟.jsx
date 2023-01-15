import React from 'react'

function SonA(props) {
  return <div>this is A{props.sendAMsg}</div>
}

function SonB(props) {
  const bMsg = 'this is from son B msg'
  return (
    <div>
      this is B <button onClick={() => props.getBMsg(bMsg)}>button</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    sendAMsg: 'test parent to child',
  }

  getBMsg = (msg) => {
    console.log(msg)
    //把msg数据交给sendAmsg
    this.setState({
      sendAMsg: msg,
    })
  }

  render() {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg}></SonA>
        <SonB getBMsg={this.getBMsg}></SonB>
      </div>
    )
  }
}

export default App
