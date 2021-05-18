import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function FormTodo(props) {
  let [name, setName] = useState("");

  function handlerChange(e){
    setName(e.target.value);
  }

  function handlerSubmit(e){
    e.preventDefault();
    props.addTodos(name)
  }
  return (
    <div>
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input onChange={handlerChange} value={name} type="text" className="form-control"/>
        </div>
        <button onClick={handlerSubmit} type="submit" className="btn btn-primary mb-2">Add</button>
      </form>
    </div>
  );
}
export default FormTodo;