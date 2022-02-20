import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CategoryForm from './Components/CategoryForm'
import StoreProvider from './Components/StoreProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StoreProvider>
      <div className="App">
        <h1>here is your first line of code in React</h1>
        <CategoryForm />
      </div>
    </StoreProvider>
    
  )
}

export default App
