import './App.css'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }
  
  return (
    <>
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            console.log(e.target.value)
          }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            console.log(e.target.value)
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
      </>
  )
}

export default App
