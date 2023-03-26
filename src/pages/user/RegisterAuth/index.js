import '../Login/authen.css'
import { useNavigate } from 'react-router-dom'
import { CallRegister } from './api.js'

function RegisterAuth() {
    const navigate = useNavigate();
    var cookie = document.cookie;
    if(cookie !== null && cookie !==""){
        navigate('/')
    }

    return (
        <div className="container">
            <div className="auth-form">
                <div className="contain-title">
                    <label>Đăng ký</label>
                </div>
                <div className="form">
                    <div className="contain">
                        <label className="label">Mã *</label>
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
                            id="login-btn"
                            onClick={registerAuth}
                            className="primary-btn button"
                        >
                            Gửi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function registerAuth() {
    document.getElementById('warnning').innerHTML = ''
    validate();
    var code = document.getElementById("code");
    var authForm = {
        email:  document.cookie.split("; ").find((row) => row.startsWith("email="))?.split("=")[1],
        code: code.value
    }
    console.log(authForm);
    CallRegister(authForm);
}
function validate() {
    var code = document.getElementById('code')
    if (code.value === '') {
        document.getElementById('warnning').innerHTML =
            'Không được để trống!'
        return
    }
    if (!/([0-9]{4})\b/.test(code.value)) {
        document.getElementById('warnning').innerHTML =
            'Mã gồm 4 chữ số!'
        return
    }
}
export default RegisterAuth
