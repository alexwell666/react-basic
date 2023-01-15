import React from 'react'

//
function ListItem({ item, delItem }) {
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={() => delItem(item.id)}>delete</button>
    </>
  )
}

function List2Item({ item, delItem }) {
  function cell() {
    console.log('ddd')
  }
  return (
    <>
      <h3>{item.id}</h3>
      <p>{item.msg}</p>
      <p>info</p>
      <button onClick={() => delItem(item.id)}>dle</button>
    </>
  )
}

class App extends React.Component {
  state = {
    msg: 'ld',
    list2: [
      { id: 1, msg: 'this is 1 msg' },
      { id: 2, msg: 'this is 2 msg' },
      { id: 3, msg: 'this is 3 msg' },
      { id: 4, msg: 'this is 4 msg' },
    ],
    list: [
      { id: 1, name: 'a', price: 20.1, info: 'a going' },
      { id: 2, name: 'b', price: 20.2, info: 'b going' },
      { id: 3, name: 'c', price: 20.3, info: 'c going' },
    ],
  }

  delItem = (id) => {
    console.log(id)
    this.setState({
      list2: this.state.list2.filter((item) => item.id !== id),
    })
  }
  // {this.state.list.map(item => <ListItem key={item.id} item={item} delItem={this.delItem(item.id)}></ListItem>)}
  render() {
    return (
      <div>
        {this.state.list2.map((item) => (
          <List2Item
            key={item.id}
            item={item}
            delItem={this.delItem}></List2Item>
        ))}
      </div>
    )
  }
}

export default App
