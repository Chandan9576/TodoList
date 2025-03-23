import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoListComponents from './Components/TodoListComponents'

function App() {
  const [count,setCount] = useState(0);
  const [inputValue,setInputValue] = useState('');
  const [list,setList] = useState([]);

  function printValue()
  {
    setList([...list,inputValue])
    
  }
 
  useEffect(()=>{
    // console.log(`${count} list is: ${inputValue}`);
    document.title = (`Count : ${count}`);
    printValue();
  },[count])

  return (
    <>
    <h1>Welcome to useEffect hook</h1>
      <div className='todo-container'>
      <input 
            type="text" 
            className='todo-input' 
            placeholder='Enter your todo list...'
            onChange={(e)=>{
                setInputValue(e.target.value)
            }}
        />
      <button onClick={()=>{setCount(count+1)} } className='todo-input-btn'>+</button>
      {
        list.map((value,index)=>(
          <p key={index}>{value}</p>
        ))
      }
      </div>
    </>
  )
}

export default App
