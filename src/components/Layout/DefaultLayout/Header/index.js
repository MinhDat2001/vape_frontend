import './Header.css'
import logo from '~/static/images/logo.png'
import user from '~/static/images/user.png'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const token = document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1];
    if(token === null || token === undefined){
        var guestClass="loginInfo display";
        var userClass = "loginInfo";
    }else{
        guestClass="loginInfo";
        userClass = "loginInfo display";
    }
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }

    const navigateRegister = () => {
        navigate('/register')
    }
    var responseHTML = (
        <div className="header">
            <div className="top">
                <div className="header_container">
                    <div className="info">
                        <img src={logo} alt="" className="logo" />
                        <Link to={'tel:0123456789'} className="phone">
                            <i className="fa-solid fa-phone"></i>0123 456 789
                        </Link>
                    </div>
                    <div className="social">
                        <ul>
                            <li>
                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="aTag"
                                >
                                    <i className="fa-brands fa-youtube maR"></i>
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.minhdat.dev/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="aTag"
                                >
                                    <i className="fa-brands fa-facebook maR"></i>
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar">
                <div className="header_container">
                    <ul>
                        <li>
                            <Link to={'/'} className="navItem">
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link to={'/product'} className="navItem">
                                Cửa hàng
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className="navItem">
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <div id="guest" className={guestClass}>
                            <button
                                onClick={navigateLogin}
                                className="authenButton"
                            >
                                Đăng nhập
                            </button>
                            <button
                                onClick={navigateRegister}
                                className="authenButton"
                            >
                                Đăng ký
                            </button>
                        </div>
                        <div id="user" className={userClass}>
                            <Link to={'/cart'} className="icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                            <Link to={'/profile'} className="icon">
                                <img src={user} alt="user" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return responseHTML
}
export default Header
