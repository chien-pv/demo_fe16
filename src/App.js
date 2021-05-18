import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './components/form_todo';
import ListTodo from './components/list_todo';
import { useState } from 'react';

function App() {

  let [todos, setTodo] = useState(
    [
      {
        id: 1,
        name: "Hoc HTML",
        isDone: false
      },
      {
        id: 2,
        name: "Hoc CSS",
        isDone: false
      },
      {
        id: 3,
        name: "Hoc JS",
        isDone: false
      }
    ]
  )

  function addTodos(name){
    
   let item = {
      id: todos.length + 1, 
      name,
      isDone: true
    }
    setTodo([item,...todos]);
  }

  return (
    <div>
      <FormTodo addTodos={addTodos} />
      <ListTodo todos={todos}/>
    </div>
  );
}

export default App;
