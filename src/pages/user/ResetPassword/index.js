import './authen.css';
import { useNavigate } from 'react-router-dom';
import { CallResetPassword } from './api';
function ResetPassword() {
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    const navigate = useNavigate();
    if (token !== null && token !== '' && token !== undefined) {
        navigate('/');
    }
    var ResponseHTML = (
        <div className="container">
            <div className="auth-form">
                <div className="contain-title">
                    <label>Mật khẩu mới</label>
                </div>
                <div className="form">
                    <div className="contain">
                        <label className="label">Nhập mật khẩu</label>
                        <input
                            id="password"
                            className="input"
                            type="password"
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <div className="contain">
                        <label className="label">Nhập lại mật khẩu</label>
                        <input
                            id="re-password"
                            className="input"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                        />
                    </div>
                    <div className="contain">
                        <label id="warnning" className="warnning"></label>
                    </div>
                    <div className="contain">
                        <button
                            onClick={sendPassword}
                            className="primary-btn button"
                        >
                            Gửi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    return ResponseHTML;
}

async function sendPassword() {
    var password = document.getElementById('password');
    if ((await validate()) === -1) {
        return;
    }
    var emailForm = {
        email: document.cookie
            .split('; ')
            .find((row) => row.startsWith('email='))
            ?.split('=')[1],
        password: password.value,
    };
    CallResetPassword(emailForm);
}

async function validate() {
    document.getElementById('warnning').innerHTML = '';
    var password = document.getElementById('password');
    var re_password = document.getElementById('re-password');
    if (password.value === '' || re_password.value === '') {
        document.getElementById('warnning').innerHTML = 'Không được để trống!';
        return -1;
    }
    if (password.value !== re_password.value) {
        document.getElementById('warnning').innerHTML = 'Mật khẩu không trùng!';
        return -1;
    }
    return 0;
}

export default ResetPassword;
