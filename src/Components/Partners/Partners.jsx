import React from 'react'

import "./Partners.css"
import logo1 from "./appstore.svg";

export default function Partners() {
    return (
        <section>
            <div className="container">
                <h2>Partners</h2>
                <p>We focus on ergonomics and meeting you where you work.
                    It's only a keystroke away.</p>
                <ul>
                    <li>
                        <a href="https://www.apple.com/uz/app-store/">
                            <img src={logo1} alt="logo app store" />
                        </a>
                    </li>
                </ul>

            </div>

        </section>
    )
}
