import './Header.css';
import logo from '~/static/images/logo.png';
import user from '~/static/images/user.png';
import logOut from '~/static/images/log-out.png';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '~/pages/Host';
import axios from 'axios';

function Header() {
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    var login=false;
    if (token !== undefined || token !== null || token.trim() !== '') {
        // console.log('token:' + token);
        window.onload = axios
            .get(getUser, {
                mode: 'cors',
                headers: {
                    token: 'Vape ' + token,
                },
            })
            .then((response) => {
                if (response.data.status === 0) {
                    // console.log(response.data);
                    document.getElementById('user').classList.add('display');
                    document
                        .getElementById('guest')
                        .classList.remove('display');
                    var avatar = response.data.data.avatar;
                    if (
                        avatar !== undefined &&
                        avatar !== null &&
                        avatar !== ''
                    ) {
                        document.getElementById('avatar').src = avatar;
                    }
                    console.log(response.data)
                } else {
                    console.log('call error');
                    var path = window.location.pathname
                    if(path.includes("profile") || path.includes("cart") ||path.includes("payment") ||path.includes("history") ||path.includes("change-info")){
                        window.location.pathname = "/login"
                        return
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
                var path = window.location.pathname
                if(path.includes("profile") || path.includes("cart") ||path.includes("payment") ||path.includes("history") ||path.includes("change-info")){
                    window.location.pathname = "/login"
                    return
                }
            });
    }
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    };

    const LogOut = () => {
        document.cookie = 'token=;';
        window.location.reload();
    };

    const navigateRegister = () => {
        navigate('/register');
    };
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
                        <div id="guest" className="loginInfo display">
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
                        <div id="user" className="loginInfo">
                            <Link to={'/cart'} className="icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                            <Link to={'/profile'} className="icon">
                                <img id="avatar" src={user} alt="user" />
                            </Link>
                            <div id="log-out" onClick={LogOut} className="icon">
                                <img src={logOut} alt="Log Out" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return responseHTML;
}
export default Header;
