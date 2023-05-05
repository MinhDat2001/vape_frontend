import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '~/pages/Host';
import styles from './AdminLogin.module.scss';
import axios from 'axios';
import { loginHost } from '~/pages/Host.js';
function AdminLogin() {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });

    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    // useEffect(() => {
    //     console.log('vao trang login');
    //     navigate('/admin/login');
    // }, []);

    if (token !== undefined || token !== null || token.trim() !== '') {
        window.onload = axios
            .get(getUser, {
                mode: 'cors',
                headers: {
                    token: 'Vape ' + token,
                },
            })
            .then((response) => {
                if (response.data.status === 0) {
                    navigate('/admin');
                } else {
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    async function login() {
        console.log('vao ham login');

        var email = document.getElementById('username');
        var password = document.getElementById('password');
        if ((await validate()) === -1) {
            return;
        }
        var loginForm1 = {
            username: email ? email.value : '',
            password: password ? password.value : '',
        };
        setLoginForm(loginForm1);
        CallLogin(loginForm);
    }

    function CallLogin(loginForm) {
        console.log('vao ham call login');

        console.log(loginForm);
        axios({
            method: 'post',
            url: 'http://localhost:8088/authenticate',
            data: loginForm,
        })
            .then((response) => {
                console.log(response);
                if (response.data.status === 0) {
                    document.cookie = 'token= ' + response.data.data + ';';
                    navigate('/admin');
                } else {
                    document.getElementById('warnning').innerText =
                        'Tài khoản hoặc mật khẩu sai!';
                }
            })
            .catch(function (error) {
                document.getElementById('warnning').innerText =
                    'Không thể đăng nhập!, Hãy liên hệ với nhà phát triển';
            });
    }

    async function validate() {
        document.getElementById('warnning').innerHTML = '';
        var email = document.getElementById('username');
        var password = document.getElementById('password');
        if (email.value === '' || password.value === '') {
            document.getElementById('warnning').innerHTML =
                'Không được để trống!';
            return -1;
        }
        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
            document.getElementById('warnning').innerHTML =
                'Nhập đúng định dạng email!';
            return -1;
        }
        return 0;
    }

    function hiddenPassword() {
        var passwordInput = document.getElementById('password');
        var hiddenPassword = document.getElementById('hidden-password');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            hiddenPassword.classList.remove('fa-eye');
            hiddenPassword.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            hiddenPassword.classList.remove('fa-eye-slash');
            hiddenPassword.classList.add('fa-eye');
        }
    }

    const handleOnChange = (e) => {
        const id = e.target.id;
        if (id === 'username') {
            setLoginForm({ ...loginForm, username: e.target.value });
        }
        if (id === 'password') {
            setLoginForm({ ...loginForm, password: e.target.value });
        }
    };

    return (
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
                            value={loginForm.username}
                            onChange={handleOnChange}
                        />
                    </div>
                    <input
                        className={styles.input}
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your email"
                    />
                    <br />
                    <input
                        className={styles.input}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                    />
                    <br />
                    <div className={styles.displayCenter}>
                        <button className={styles.button}>Login</button>{' '}
                    </div>
                    {/* <div className="contain">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}
async function login() {
    console.log('login');
    var email = document.getElementById('username');
    var password = document.getElementById('password');
    if ((await validate()) === -1) {
        return;
    }
    var loginForm = {
        username: email ? email.value : '',
        password: password ? password.value : '',
    };
    axios({
        method: 'post',
        url: loginHost,
        data: loginForm,
    })
        .then((response) => {
            if (response.data.status === 0) {
                document.cookie = 'token= ' + response.data.data + ';';
                window.location.href = '/admin';
            } else {
                document.getElementById('warnning').innerText =
                    'Tài khoản hoặc mật khẩu sai!';
            }
        })
        .catch(function (error) {
            document.getElementById('warnning').innerText =
                'Không thể đăng nhập!, Hãy liên hệ với nhà phát triển';
        });
}
async function validate() {
    document.getElementById('warnning').innerHTML = '';
    var email = document.getElementById('username');
    var password = document.getElementById('password');
    if (email.value === '' || password.value === '') {
        document.getElementById('warnning').innerHTML = 'Không được để trống!';
        return -1;
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
        document.getElementById('warnning').innerHTML =
            'Nhập đúng định dạng email!';
        return -1;
    }
    return 0;
}
export default AdminLogin;
