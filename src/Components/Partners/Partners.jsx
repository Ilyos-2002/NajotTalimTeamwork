import React from 'react'

import "./Partners.css"
import logo1 from "./appstore.svg";
import logo2 from "./apiary.svg";
import logo3 from "./android.svg";
import logo4 from "./basecamp.svg";
import logo5 from "./logo5.svg";
import logo6 from "./ibm.svg";

export default function Partners() {
    return (
        <section>
            <div className="container partnerscard">
                <h2 className='partnerscard__title'>Partners</h2>
                <p>We focus on ergonomics and meeting you where you work.
                    It's only a keystroke away.</p>
                <ul>
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
