import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex justify-center items-center h-screen w-screen bg-blue-500">
      <h1 className='text-6xl'>Hello World</h1>

    </div>
  )
}

export default App
