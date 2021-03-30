import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToDo from './components/AddTodo'
import {useState} from 'react'


function App() {

  const [items, setItems] = useState([])

  function add(newItems){
    const addItems = [...items, newItems]
    setItems(addItems)
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>TO DO</h1>
        <AddToDo add={add}/>
        <List addItems = {items}/>
      </header>
    </div>
  );
}

export default App;

// import React, { useState } from 'react'
// import List from './components/List'
// import AddTodo from './components/AddTodo'
// import './App.css'

// function App() {
//   const [todos, setTodos] = useState([])

//   function addTodo(item) {
//     const newTodos = [...todos, item]
//     setTodos(newTodos)
//   }

//   return (
//     <div className="App">
//       <AddTodo addTodo={addTodo} />
//       <List list={todos} />
//     </div>
//   )
// }

// export default App
