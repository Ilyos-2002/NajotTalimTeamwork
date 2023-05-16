import "./style.css"
import map from "./images/bx_bx-map.svg"
import phone from "./images/icon-baseline-phone-android.svg"
import facebook from "./images/icon-facebook-filled.svg"
import linkedin from "./images/icon-linkedin-filled.svg"
import twitter from "./images/icon-twitter-outlined.svg"

export function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__box">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <p className="item__text">Product</p>
                                <a className="item__link" href="/" >Overview</a>
                                <a className="item__link" href="/" >Features</a>
                                <a className="item__link" href="/" >Roadmap</a>
                                <a className="item__link" href="/" >Pricing</a>
                            </li>
                            <li className="footer__item">
                                <p className="item__text">About</p>
                                <a className="item__link" href="/" >Overview</a>
                                <a className="item__link" href="/" >Features</a>
                                <a className="item__link" href="/" >Vacancy Jobs</a>
                                <a className="item__link" href="/" >Awards</a>
                            </li>
                            <li className="footer__item">
                                <p className="item__text">Contact</p>
                                <a className="item__link" href="/" >Head Office</a>
                                <a className="item__link" href="/" >Subsidiaries</a>
                                <a className="item__link" href="/" >Support</a>
                                <a className="item__link" href="/" >Feedback    </a>
                            </li>
                        </ul>
                        <ul>
                            <li className="item">
                                <img src={map} alt="" />
                                <h3 className="svg__text">65806 Briarwood Road San Francisco CA </h3>
                            </li>
                            <li className="item">
                                <img src={phone} alt="" />
                                <h3 className="svg__text">417-865-1442</h3>
                            </li>
                            <li className="item_2">
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                                <img src={linkedin} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}