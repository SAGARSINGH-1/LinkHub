import React from 'react'
import Navbar from '../../components/layout/Navbar'
import AddLinks from './AddLinks'
import Footer from '../../components/layout/Footer'

export default function Home() {
  return (
    <div>
        <header>
            <nav>
                <Navbar/>
            </nav>
        </header>

        <div className='max-w-6xl mx-auto my-10'>
            <AddLinks/>
        </div>

        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
