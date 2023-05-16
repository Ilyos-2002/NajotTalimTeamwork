import React from 'react'

import "./Partners.css"
import logo1 from "./Images/appstore.svg";
import logo2 from "./Images/apiary.svg";
import logo3 from "./Images/android.svg";
import logo4 from "./Images/basecamp.svg";
import logo5 from "./Images/logo5.svg";
import logo6 from "./Images/ibm.svg";

export default function Partners() {
    return (
        <section>
            <div className="container partnerscard">
                <h2 className='partnerscard__title'>Partners</h2>
                <p className='partnerscard__text'>We focus on ergonomics and meeting you where you work.
                    It's only a keystroke away.</p>
                <ul className='partnerscard_list'>
                    <li>
                        <a href="https://www.apple.com/uz/app-store/">
                            <img src={logo1} alt="logo app store" />
                        </a>
                    </li>
                    <li>
                        <a href="https://apiary.io/">
                            <img src={logo2} alt="logo app store" />
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.android.com/about?gclid=CjwKCAjw04yjBhApEiwAJcvNoSLzem8t5WLrieoWE-wi7RU2OoRFwaJARcoG1VhN9h5bvQmbmqqLJBoCXqcQAvD_BwE&gclsrc=aw.ds">
                            <img src={logo3} alt="logo app store" />
                        </a>
                    </li>
                    <li>
                        <a href="https://basecamp.com/">
                            <img src={logo4} alt="logo app store" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.airbnb.com/">
                            <img src={logo5} alt="logo app store" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibm.com/us-en/">
                            <img src={logo6} alt="logo app store" />
                        </a>
                    </li>
                </ul>

            </div>

        </section>
    )
}
