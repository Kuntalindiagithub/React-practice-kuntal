import logo from './logo.svg';
import './App.css';

import react , {useState,useEffect,useContext} from "react";
import { getPosts,getRandomUser } from './api';

import MyComponent from './components/counterpage';
import UserCard from './components/UserCard';

import UserInfo from './components/UserInfo';

import Counter from './components/Counter';
import { CounterContext } from './context/Counter';

import CounterRedux from './components/CounterRedux';
import { useDispatch,useSelector } from 'react-redux';

import {fetchTodos} from './redux/slices/todo'


function App() {

  /*const CounterState = useContext(CounterContext);

  const [data,setData]=useState(null);
  const [user,setUser]=useState(null);
  
  useEffect(()=>{
    getPosts().then((posts)=>setData(posts))
  },[]);

  useEffect(()=>{
    getRandomUser().then((user)=>setUser(user.results[0]))
  },[]);


  const refresh=()=>{
    getRandomUser().then((user)=>setUser(user.results[0]))
  };

  const name ="Kuntal";
  */
  const dispatch=useDispatch();
  const state=useSelector((state) => state);

  console.log('state',state);

  if(state.todo.isLoading)
  {
    return <h1>Loading</h1>
  }
  
  return (
    
    /*<div>
      <MyComponent name="Part 1"/>   
      <MyComponent name="Part 2"/>  
      <MyComponent name="Part 3"/>  
      <MyComponent name="Part 4"/>  
      <MyComponent name="Part 5"/>  
      <MyComponent name="Part 6"/>  
    </div>*/
    
    /*<div>
      <UserCard name={name}/>
    </div>*/

    /*<div>
      {user && <UserInfo data={user}/>}
      <button onClick={refresh}>Refresh User</button>
      {
        data ? data.map((e)=><UserCard body={e.body} id={e.id} title={e.title} userId={e.userId} />) : (<p>No Data</p>)
      }
    </div>*/
   /* <div>
      <h1>Count is {CounterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>*/
    /*<div>
      <CounterRedux />
      
    </div>*/
    <div>
      <button onClick={e => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data && state.todo.data.map((e)=><li>{e.title}</li>)}
    </div>
  );
}

/*
<button onClick={ e => dispatch({type : "INCREMENT"})}>Increment</button>
<button onClick={ e => dispatch({type : "DECREMENT"})}>Decrement</button>
*/
export default App;
