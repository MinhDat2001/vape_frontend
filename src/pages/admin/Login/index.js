import styles from './AdminLogin.module.scss';
import axios from 'axios';
import { loginHost } from '~/pages/Host.js';
function AdminLogin() {
    return (
        <div className={styles.container}>
            <div className={styles.loginForm}>
                <div className={styles.form}>
                    <div className={styles.displayCenter}>
                        <label className={styles.title}>Admin login</label>
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
                    <label id="warnning" className="warnning"></label>
                    <div className={styles.displayCenter}>
                        <button onClick={login} className={styles.button}>
                            Login
                        </button>{' '}
                    </div>
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
