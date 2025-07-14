import './App.css'
import { useAppDispatach, useAppSelector } from './features/hooks/hooks'
import { increment,decrement,addInputedValue, resetInputedValue} from './features/counter.slice';
import { useState } from 'react';

function App() {
  const count = useAppSelector((state) => state.counter.counter)
  const [formInput,setFormInput] = useState(0)
  const dispatch = useAppDispatach();

  type appFunctionsType =  {
     add:() => void,
     subtract:() => void
     addFormInput:(num:number) => void;
     reset:()=>void
  }

  const add:appFunctionsType["add"] = ()=>{
    dispatch(increment())
  }

  const substract:appFunctionsType["subtract"] = () =>{
    dispatch(decrement())
  }

  const reset = () =>{
    dispatch(resetInputedValue())
  }



  const addFromInput:appFunctionsType["addFormInput"] = (num) =>{
    dispatch(addInputedValue(Number(num)))
    setFormInput(0)
  }

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={add}>
          + 
        </button>
        <button onClick={substract}>
          - 
        </button>

      </div>

      <p>Counter is {count}</p>
      <button onClick={()=>reset()}>Reset</button>

      <div>
        <input type="text" placeholder='Enter number to add' onChange={(e) =>setFormInput(Number(e.target.value))}  value={formInput}  />
        <input type="submit" onClick={() => addFromInput(formInput)} />
      </div>
    </>
  )
}

export default App
