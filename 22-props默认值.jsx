import React from 'react'

import PropTypes from 'prop-types'

//推荐写法直接这里pageSize=10(默认值)
function Test({ list, pageSize }) {
  return (
    <>
      <div>
        {list.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div>{pageSize}</div>
    </>
  )
}

Test.propTypes = {
  list: PropTypes.array.isRequired,
}
//另外一种写法
// Test.defaultProps = {
//   pageSize: 10//默认值为10
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Test list={[1, 2, 3]} pageSize={30}></Test>
      </div>
    )
  }
}

export default App
