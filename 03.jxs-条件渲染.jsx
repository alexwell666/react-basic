
//条件渲染
//技术方案：三元表达式  逻辑&&运算


//1、三元表达式
//2、&&

const flag=true
function App() {
  return (
    <div className="App">
   {flag?  <div> <span>this is span</span></div>:null}
    
    {true && <span>this is span</span>}
    
    </div>
  )
}

export default App;
