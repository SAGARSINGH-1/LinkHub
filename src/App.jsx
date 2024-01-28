import { useState } from 'react'
// import Signup from './pages/registration/signup'
import { Toaster,toast } from 'react-hot-toast'
import Login from './pages/registration/login'


function App() {

  return (
    <div className='m-4 text-red-200'>
      <Login/>
      <div><Toaster/></div>
    </div>
  )
}

export default App
