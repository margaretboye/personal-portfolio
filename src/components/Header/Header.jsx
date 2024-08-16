import React from 'react'
import './Header.css'
import '../../App.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import me from '../../assets/me.jpg'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Stephen O. B. Ankrah</h1>
                <h5 className="text-light">Junior Backend Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={me} alt="me" />
                </div>
                <a href="#Contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header