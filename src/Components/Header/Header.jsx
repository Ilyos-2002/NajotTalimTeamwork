import React from 'react'
import "./style.css"
import logo from "./images/logo dark.svg"
import burger from "./images/bx_bx-menu-alt-right.svg"

export default function Header() {

    
    return (
        <>
        <header className='header'>
                <div className='container'>
                    <div className='header__box'>
                        <img src={logo} alt="" />
                        <nav className='header__nav'>
                            <a className='header__link' href="/">Home</a>
                            <a className='header__link' href="/">Product</a>
                            <a className='header__link' href="/">About</a>
                            <a className='header__link' href="/">Contact</a>
                        </nav>
                        <button className='header__btn'>Login</button>
                        <button className='burger__btn'><img className='burger' src={burger} alt="" /></button>
                    </div>
                </div>
            </header>
        </>
    )
}
