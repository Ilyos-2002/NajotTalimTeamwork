import React from 'react'

import avatar1 from "./Images/Avatar1.png"
import avatar2 from "./Images/Avatar2.png"
import avatar3 from "./Images/Avatar3.png"
import avatar4 from "./Images/Avatar4.png"

import "./Testimonials.css"

export default function Testimonials() {
    return (
        <section
        >
            <div className='container testimonialscard'>
                <h2 className='testimonialscard__title'>Testimonials</h2>
                <ul className='testimonialscard__list'>
                    <li className='testimonialscard__item'>
                        <div className='testimonialscard__item-content'>
                            <img src={avatar1} alt="Designer" />
                            <div >
                                <h4 className='testimonialscard__item-title'>Claire Bell</h4>
                                <p className='testimonialscard__item-text'>Designer</p>
                            </div>
                        </div>
                        <p>
                            I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!
                        </p>

                    </li>
                    <li className='testimonialscard__item'>
                        <div className='testimonialscard__item-content'>
                            <img src={avatar1} alt="Designer" />
                            <div >
                                <h4 className='testimonialscard__item-title'>Claire Bell</h4>
                                <p className='testimonialscard__item-text'>Designer</p>
                            </div>
                        </div>
                        <p>
                            I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!
                        </p>

                    </li>
                    <li className='testimonialscard__item'>
                        <div className='testimonialscard__item-content'>
                            <img src={avatar1} alt="Designer" />
                            <div >
                                <h4 className='testimonialscard__item-title'>Claire Bell</h4>
                                <p className='testimonialscard__item-text'>Designer</p>
                            </div>
                        </div>
                        <p>
                            I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!
                        </p>

                    </li>
                    <li className='testimonialscard__item'>
                        <div className='testimonialscard__item-content'>
                            <img src={avatar1} alt="Designer" />
                            <div >
                                <h4 className='testimonialscard__item-title'>Claire Bell</h4>
                                <p className='testimonialscard__item-text'>Designer</p>
                            </div>
                        </div>
                        <p>
                            I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!
                        </p>

                    </li>

                </ul>
            </div>
        </section>
    )
}
