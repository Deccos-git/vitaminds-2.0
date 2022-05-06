import React from 'react'
import Topbar from '../Components/TopBar'
import Navigation from '../Nav/Navigation'
import '../Styles/Layout.css'
import Home from '../Pages/Home'

const Layout = () => {
  return (
    <div className="container">
        <main>
            <section id='page'>
                <Topbar/>
                <Home/>
            </section>
        </main>
    </div>
  )
}

export default Layout