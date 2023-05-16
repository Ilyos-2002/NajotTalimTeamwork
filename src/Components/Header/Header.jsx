import React from 'react'
import logo from "./images/logo dark.svg"

export default function Header() {
    return (
        <>
        <header className='header'>
                <div className='container'>
                    <div className='headerbox'>
                        <img src={logo} alt="" />
                        <nav className='headernav'>
                            <a className='headerlink' href="/">Home</a>
                            <a className='headerlink' href="/">Product</a>
                            <a className='headerlink' href="/">About</a>
                            <a className='headerlink' href="/">Contact</a>
                        </nav>
                        <button className='header__btn'>login</button>
                    </div>
                </div>
            </header>
        </>
    )
}
