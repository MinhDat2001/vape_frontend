import axios from 'axios';
import { registerHost } from '~/pages/Host.js';
function CallRegister(registerForm) {
    axios({
        method: 'post',
        url: registerHost,
        data: registerForm,
    })
        .then((response) => {
            if (response.data.status === 0) {
                window.location.href = '/register/auth';
            } else {
                document.getElementById('warnning').innerText =
                    'Đăng ký không thành công';
            }
        })
        .catch(function (error) {
            document.getElementById('warnning').innerText =
                'Không thể đăng ký!, Hãy liên hệ với nhà phát triển';
        });
}

export { CallRegister };
