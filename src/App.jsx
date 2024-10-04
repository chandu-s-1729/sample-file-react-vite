import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  const handleInput = (event) => {
  setInputValue(event.target.value);
}

const addTask = () => {
if (inputValue == "") {
   alert("Enter Valid Input")
} else {
  const newTask = inputValue;
  const newTaskArr = [...taskArr, newTask];
  setTaskArr(newTaskArr);
        setInputValue("");

}  
}

  return (
    <>
    <div>
      <div className='inputBox'>
        <input type="text" placeholder='Add New Task' value={inputValue} onChange={handleInput} />
        <button onClick={addTask}> Add Task </button>
      </div>
      <div>
        <ul>
          {
            taskArr.map((task) => {
              return <> <li>{task}</li> </>
            })
          }
        </ul>
      </div>
    </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React Sprint </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

// rfce = shortcut to create React component
// import React from 'react' 

// function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App

// Thanks for helping in setting Git and commands Yasvanth

export default App
