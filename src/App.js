import React from 'react'

//test

function ListItem ({ item, delItem, children }) {
  return (
    <div>
      <>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>children</p>
        <button onClick={() => delItem(item.id)}>del</button>
      </>
    </div>
  )
}




class App extends React.Component {

  state = ({
    list: [
      { id: 1, name: 'this is 1', price: 11 },
      { id: 2, name: 'this is 2', price: 12 },
      { id: 3, name: 'this is 3', price: 13 }
    ]
  })

  delItem = (id) => {
    console.log(id)
    this.setState({
      list: this.state.list.filter((item) => item.id !== id)
    })
  }


  render () {


    return (
      <div>
        {this.state.list.map(item => (
          <ListItem item={item} delItem={this.delItem}>this is children</ListItem>))}
      </div>
    )
  }
}


export default App
