import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import About from './components/About'

function Layout() {
    const [count, setCount] = useState(0)
    
  return (
    <>
  <Header />
  <Outlet />
    </>
  )
}

export default Layout