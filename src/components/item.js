function Item(props) {
    let {index, id, name, isDone} = props;
    let handlerClick = (e) => {
        console.log(e);
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>
                <input type="checkbox" checked={isDone} onClick={handlerClick}/>
            </td>
            <td>
                <button type="button" class="btn btn-primary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
  
export default Item;