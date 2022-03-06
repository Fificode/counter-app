import React, { useReducer } from 'react'
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initialState
      default:
        return state
  }
}




const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <React.Fragment>
      <CountContext.Provider 
      value={{countState: count, countDispatch: dispatch}}>
      <section className='app-section'>
        <div>
          <h1>Count - {count}</h1>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      </div>
      </section>
      </CountContext.Provider>
    </React.Fragment>
  )
}

export default App