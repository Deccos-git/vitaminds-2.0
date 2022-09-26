import React from 'react'
import Topbar from '../Components/TopBar'
import '../Styles/index.scss'
import Navigation from '../Nav/Navigation'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="container">
        <main>
            <section id='page'>
                <Topbar/>
                <Navigation/>
                <Footer/>
            </section>
        </main>
    </div>
  )
}

export default Layout