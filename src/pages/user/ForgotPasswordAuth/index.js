import './authen.css';
import { useNavigate } from 'react-router-dom';
import { CallForgotPassword } from './api';
function ForgotPasswordAuth() {
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
                    <label>Quên mật khẩu</label>
                </div>
                <div className="form">
                    <div className="contain">
                        <label className="label">Mã xác thực</label>
                        <input
                            id="code"
                            className="input"
                            type="text"
                            placeholder="Nhập mã xác thực"
                        />
                    </div>
                    <div className="contain">
                        <label id="warnning" className="warnning"></label>
                    </div>
                    <div className="contain">
                        <button
                            onClick={sendCode}
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

async function sendCode() {
    var code = document.getElementById('code');
    if ((await validate()) === -1) {
        return;
    }
    var emailForm = {
        email: document.cookie
            .split('; ')
            .find((row) => row.startsWith('email='))
            ?.split('=')[1],
        code: code.value,
    };
    CallForgotPassword(emailForm);
}

async function validate() {
    document.getElementById('warnning').innerHTML = '';
    var code = document.getElementById('code');
    if (code.value === '') {
        document.getElementById('warnning').innerHTML = 'Không được để trống!';
        return -1;
    }
    if (!/^[0-9]{4}/.test(code.value)) {
        document.getElementById('warnning').innerHTML =
            'Mã xác thực gồm 4 chữ số!';
        return -1;
    }
    return 0;
}

export default ForgotPasswordAuth;
