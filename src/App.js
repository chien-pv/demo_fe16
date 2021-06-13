import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './components/form_todo';
import ListTodo from './components/list_todo';
import { useState, useEffect } from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {fetchData} from './actions';
import axios from "axios";

function App() {
  let [todos, setTodo] = useState([]);
  let dataTodos = useSelector((state)=>state) ;
  let dispatch = useDispatch();
  // useEffect(function(){
  //   axios.get('https://60b33e621bec230017bf35d7.mockapi.io/todos')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //     setTodo(response.data)
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // },[])

  useEffect(function(){
    // dispatch(fetchData());
  }, [])

  function addTodos(name){
    
   let item = {
      id: todos.length + 1, 
      name,
      isDone: true
    }
    setTodo([item,...todos]);
  }

  function loadData(){
     dispatch(fetchData());
  }

  return (
    <div>
      <button onClick={loadData}>Load Data</button>
      <FormTodo addTodos={addTodos} />
      <ListTodo todos={dataTodos}/>
    </div>
  );
}

export default App;
