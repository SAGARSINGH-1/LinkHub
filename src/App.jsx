import { useState } from 'react'
import Signup from './pages/registration/signup'
import { Toaster,toast } from 'react-hot-toast'
import Login from './pages/registration/login'
import Home from './pages/home/Home'
import { useStore } from './store/store'



function App() {

  const {style, darkMode} = useStore();

  //console.log(darkMode);

  return (
    <div className={`${ darkMode ? `${style}` : 'bg-white'}`}>

      <Home/>


      {/* <Login/>
      <div><Toaster/></div> */}
    </div>
  )
}

export default App
