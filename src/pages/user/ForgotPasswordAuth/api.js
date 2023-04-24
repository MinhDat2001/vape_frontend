import axios from 'axios';
import { forgotPasswordAuthHost } from '~/pages/Host.js';
function CallForgotPassword(emailForm) {
    axios({
        method: 'post',
        url: forgotPasswordAuthHost,
        data: emailForm,
    })
        .then((response) => {
            if (response.data.status === 0) {
                window.location.href = '/reset-password';
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

export { CallForgotPassword };
