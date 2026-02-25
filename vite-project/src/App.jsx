import { useState } from 'react'


function App() {

  let [counter, setcounter] = useState(15)
  //usestate send the opration command in batches to the variables | if we give same command for multiple times like counter + 1 then it will execute only once
  //so we use call back function to update the value

  //set counter is function ehic also takes call back function as an argument

  //for taking that we need to take prevcounter as an argument in setcounter because with that method it callback every times with new values and give added values 
  const addValue = () => {
    setcounter(prevCounter => prevCounter + 1)
  }
  const removeValue = () => {
    setcounter(prevCounter => prevCounter - 1)
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Count value : {counter}</h2>

      <button onClick={addValue}>Add button{counter}</button>  <br />
      <button onClick={removeValue}>Remove button{counter}</button>
    </>
  )
}

export default App
