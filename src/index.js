//React：框架的核心包
//ReactDOM：专门做渲染相关的包

import React from 'react'
// import ReactDOM from 'react-dom'
//应用的全局样式文件
import './index.css'
//引入跟组件
import App from './App'

import { createRoot } from 'react-dom/client'

//渲染根组件APP到一个id 为root的dom节点上

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )


const root = createRoot(document.getElementById('root'))
root.render(

  //严格模式节点去掉
  //useEffect的执行时计

  // <React.StrictMode></React.StrictMode>

  <App />
)





