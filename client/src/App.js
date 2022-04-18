import React,{Fragment} from 'react';
import InputTodo from "./components/InputTodo";
import ListTodo from './components/ListTodo';
function App()
{
  return(
    <Fragment>  //ab se fragments use karna bhidu return ke aandar zyada ache  hote hai
      <div className='container'>
      <InputTodo/>
      <ListTodo/>
    </div>
    </Fragment>
    
  )
}

export default App;