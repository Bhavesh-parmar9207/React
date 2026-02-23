import { useState } from 'react'


function App() {

  let [counter, setcounter] = useState(0)
  const hanleAdd = () => {
    setcounter(counter + 1)
  }
  const handleRemove = () => {
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Count value : {counter}</h2> 

      <button onClick={hanleAdd}>Add button</button>  <br/>
      <button onClick={handleRemove}>Remove button</button>  
    </>
  )
}

export default App
