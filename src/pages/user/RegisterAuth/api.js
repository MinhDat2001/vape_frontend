import axios from 'axios';
import { authRegisterHost } from '~/pages/Host.js';
function CallRegister(authForm) {
    const delay = (delayInms) => {
        return new Promise((resolve) => setTimeout(resolve, delayInms));
    };
    axios({
        method: 'post',
        url: authRegisterHost,
        data: authForm,
    })
        .then(async (response) => {
            if (response.data.status === 0) {
                document.getElementById('warnning').style.color =
                    'var(--primary-color)';
                document.getElementById('warnning').innerHTML =
                    'Đăng ký thành công!';
                await delay(2000);
                window.location.href = '/login';
            } else {
                document.getElementById('warnning').innerText =
                    'Mã không chính xác hoặc hết thời hạn';
            }
        })
        .catch(function (error) {
            document.getElementById('warnning').innerText =
                'Lỗi hệ thống!, Hãy liên hệ với nhà phát triển';
        });
}

export { CallRegister };
