
import { useEffect, useReducer, useState } from 'react';
import Ratings from './components/Ratings';
import Header from './components/Header/Header';

function Main() {
  const [data, setData] = useState([]);
  
  const initialState = {count : 0};
  function reducer(state, action) {
      switch(action.type) {
          case "INCREMENT":
              return {count : state.count +1}
          case "DECREMENT":
              return {count : state.count -1, test: 2}
          default:
              throw new Error();
      }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(()=> {
    let req = fetch('https://reqres.in/api/users?page=2');
    req.then(response => response.json()).then(res => {
        setData(res.data);
    })
  },[])

  return (
    <div className="App">
        <Header/>
        <h1>COUNTER: {state.count}</h1>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        {data && data.map((each, index) => (
            <div key={index}>
            <p> EMAIL: {each.email}</p>
            <Ratings count={15}></Ratings>
            </div>
        ))}
    </div>
  );
}

export default Main;
