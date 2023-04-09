import './authen.css'
import { useNavigate } from 'react-router-dom'
import { CallForgotPassword } from './api';
function ForgotPassword() {
    const token = document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1];
    const navigate = useNavigate();
    if(token !== null && token !=="" && token !==undefined){
        navigate('/')
    }
    var ResponseHTML = (
        <div className="container">
            <div className="auth-form">
                <div className="contain-title">
                    <label>Quên mật khẩu</label>
                </div>
                <div className="form">
                    <div className="contain">
                        <label className="label">Email</label>
                        <input
                            id="email"
                            className="input"
                            type="email"
                            placeholder="Nhập email của bạn"
                        />
                    </div>
                    <div className="contain">
                        <label id="warnning" className="warnning"></label>
                    </div>
                    <div className="contain">
                        <button
                            onClick={sendEmail}
                            className="primary-btn button"
                        >
                            Gửi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    return ResponseHTML
}


async function sendEmail() {
    var email = document.getElementById('email')
    if(await validate() === -1){
        return
    }
    document.cookie = "email="+email.value+";";
    var emailForm = {
        email : email ? email.value : "",
    }
    CallForgotPassword(emailForm)
}

async function validate() {
    document.getElementById('warnning').innerHTML = ''
    var email = document.getElementById('email')
    if (email.value === '') {
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


export default ForgotPassword
