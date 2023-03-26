import './authen.css'
import { Link, useNavigate } from 'react-router-dom'
import { CallLogin } from './api';
function Login() {
    const navigate = useNavigate();
    var cookie = document.cookie;
    if(cookie !== null && cookie !==""){
        navigate('/')
    }
    var ResponseHTML = (
        <div className="container">
            <div className="auth-form">
                <div className="contain-title">
                    <label>Đăng nhập</label>
                </div>
                <div className="form">
                    <div className="contain">
                        <label className="label">Email</label>
                        <input
                            id="username"
                            className="input"
                            type="email"
                            placeholder="Nhập email"
                        />
                    </div>
                    <div className="contain">
                        <label className="label">Mật khẩu</label>
                        <input
                            id="password"
                            className="input"
                            type="password"
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <div className="contain">
                        <i
                            onClick={hiddenPassword}
                            id="hidden-password"
                            className="fa-solid fa-eye hidden-password"
                        ></i>
                    </div>
                    <div className="contain">
                        <Link
                            className="forgot-password"
                            to={'/forgot-password'}
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <div className="contain">
                        <label id="warnning" className="warnning"></label>
                    </div>
                    <div className="contain">
                        <button
                            id="login-btn"
                            onClick={login}
                            className="primary-btn button"
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <div className="contain">
                        <button
                            id="login-gg-btn"
                            onClick={loginGG}
                            className="social-btn button"
                        >
                            <i className="fa-brands fa-google social-icon"></i>
                            Google
                        </button>
                        <button
                            id="login-fb-btn"
                            onClick={loginFB}
                            className="social-btn button"
                        >
                            <i className="fa-brands fa-facebook social-icon"></i>
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    return ResponseHTML
}
function hiddenPassword() {
    var passwordInput = document.getElementById('password')
    var hiddenPassword = document.getElementById('hidden-password')
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
        hiddenPassword.classList.remove('fa-eye')
        hiddenPassword.classList.add('fa-eye-slash')
    } else {
        passwordInput.type = 'password'
        hiddenPassword.classList.remove('fa-eye-slash')
        hiddenPassword.classList.add('fa-eye')
    }
}


async function login() {
    var email = document.getElementById('username')
    var password = document.getElementById('password')
    if(await validate() === -1){
        return
    }
    var loginForm = {
        username : email ? email.value : "",
        password : password ? password.value:""
    }
    CallLogin(loginForm)
}
function loginGG() {}
function loginFB() {}

async function validate() {
    document.getElementById('warnning').innerHTML = ''
    var email = document.getElementById('username')
    var password = document.getElementById('password')
    if (email.value === '' || password.value === '') {
        document.getElementById('warnning').innerHTML = 'Không được để trống!'
        return -1
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
        document.getElementById('warnning').innerHTML =
            'Nhập đúng định dạng email!'
        return -1
    }
    return 0;
}


export default Login
