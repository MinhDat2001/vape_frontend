import axios from 'axios';
import { resetPasswordHost } from '~/pages/Host.js';
function CallResetPassword(emailForm) {
    const delay = (delayInms) => {
        return new Promise((resolve) => setTimeout(resolve, delayInms));
    };
    console.log(emailForm);
    axios({
        method: 'post',
        url: resetPasswordHost,
        data: emailForm,
    })
        .then(async (response) => {
            if (response.data.status === 0) {
                document.getElementById('warnning').style.color =
                    'var(--primary-color)';
                document.getElementById('warnning').innerText =
                    'Đổi mật khẩu thành công';
                await delay(2000);
                window.location.href = '/login';
            } else {
                document.getElementById('warnning').innerText =
                    'Xảy ra sự cố, vui lòng thử lại!';
                console.log(response.data);
            }
        })
        .catch(function (error) {
            document.getElementById('warnning').innerText =
                'Sự cố!, Hãy liên hệ với nhà phát triển';
            console.log(error);
        });
}

export { CallResetPassword };
