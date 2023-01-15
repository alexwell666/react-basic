

//1、识别常规的变量
//2、原生js方法的调用
//3、三元运算符
const name='alex'
const getAge=()=>{
  return 19
}

const  flag=true




function App() {
  return (
    <div className="App">
      {name}
      {getAge}
      {flag? 'good':'terrible'}
    </div>
  )
}

export default App;
