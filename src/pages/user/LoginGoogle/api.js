import axios from 'axios';
import { loginGoogleHost } from '~/pages/Host.js';

function CallLogin() {
    var param = new URLSearchParams(window.location.search);
    var code = param.get('code');
    var urlLogin = loginGoogleHost + '?code=' + code;
    console.log('-------------------' + code);
    console.log('-------------------: ' + urlLogin);
    axios({
        method: 'get',
        url: urlLogin,
    })
        .then((response) => {
            if (response.data.status === 0) {
                console.log('login cucsess');
                document.cookie = 'token= ' + response.data.data + ';';
                window.location.href = '/';
            } else {
                console.log('login false');
            }
        })
        .catch(function (error) {
            console.log('can not send request:' + error);
        });
}
export { CallLogin };
