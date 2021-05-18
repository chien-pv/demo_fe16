import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  let [pizzas, setpizzas] = useState(
    [
      {
        id: 1,
        name: "Mark",
        price: 10,
        urlImage: "/image/java.jpg",
        count: 5
      },
      {
        id: 2,
        name: "Mark1",
        price: 15,
        urlImage: "/image/java.jpg",
        count: 5
      },
      {
        id: 3,
        name: "Mark3",
        price: 16,
        urlImage: "/image/java.jpg",
        count: 6
      },
      {
        id: 4,
        name: "Mark4",
        price: 10,
        urlImage: "/image/java.jpg",
        count: 5
      },
    ]
  )

  let [itemPizza, setitemPizza] = useState({});
  let [idPizza, setidPizza] = useState(null);
  let [isChange, setIsChange] = useState(false);
  let [isChangeRemove, setIsChangeRemove] = useState(false);

  function orderPizzas(id){
    // console.log(id)
    let obj = pizzas.find((element) => element.id == id);
    // console.log(obj)
    setitemPizza(obj);
    setIsChange(!isChange);
  }

  function removeOrderPizzas(id){
    setidPizza(id);
    setIsChangeRemove(!isChangeRemove);
  }

 return(
  <div className="container">
  <div className="row">
    <div className="col-8">
      <ListOrders isChangeRemove={isChangeRemove} isChange={isChange} item={itemPizza} idPizza={idPizza}/>
    </div>
    <div className="col-4">
      <ListPizzas pizzas={pizzas} orderPizzas={orderPizzas} removeOrderPizzas={removeOrderPizzas}/>
    </div>
  </div>
</div>
 )
}

function ListOrders(props){
  let [orders, setorders] = useState([])
  console.log("------------ListOrders---------");
  
   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    // Update the document title using the browser API
    // console.log(props.item);
    if(Object.keys(props.item).length != 0 ){
      setorders([...orders, props.item]);
    }
  }, [props.isChange]);

  useEffect(() => {
    let id = props.idPizza
    if(props.idPizza!= null ){
      let index = orders.findIndex((item => item.id == id))
      orders.splice(index, 1)
      setorders([...orders]);
    }
  }, [props.isChangeRemove]);

  let dataOrder = orders.map((item, index)=>{
    return(
      <img className="image" src={`${process.env.PUBLIC_URL}${item.urlImage}`} />
    )
  })
  return(
    <>
      {dataOrder}
    </>
  )
}

function ListPizzas(props){
  let total = useState(0)
  // console.log(props.pizzas);
  let datas = props.pizzas.map((item, index)=>{
    return(
      <Item orderPizzas={props.orderPizzas} removeOrderPizzas={props.removeOrderPizzas} {...item}/>
    )
  })
  return(
    <>
     <table className="table">
        <tbody>
         {datas}
          <tr>
            <td>Total</td>
            <td>{total}$</td>
          </tr>
          <tr>
          <button type="button" className="btn btn-success">Checkout</button>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function Item(props){
  let {id, name, price, urlImage, count} = props;
  let [itemCount, setitemCount] = useState(0)
  function handleClickPlus(){
    setitemCount(itemCount+1);
    props.orderPizzas(id);
  }

  function handleClickSub(){
    setitemCount(itemCount-1);
    props.removeOrderPizzas(id);
  }

  return(
    <tr>
      <td>
        {name} <br/> 
        {price}$
      </td>
      <td>
        <div className="btn-group" role="group">
          <button onClick={handleClickSub} type="button" className="btn btn-danger">-</button>
          <button type="button" className="btn btn-warning">{itemCount}</button>
          <button onClick={handleClickPlus} type="button" className="btn btn-success">+</button>
        </div>
      </td>
    </tr>
  )
}

export default App;
