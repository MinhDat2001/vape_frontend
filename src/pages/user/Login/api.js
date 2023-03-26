import axios from 'axios'
import {loginHost} from '~/pages/Host.js'
function CallLogin(loginForm){
    axios({
        method : 'post',
        url: loginHost,
        data: loginForm
    }).then((response) => {
        if(response.data.status === 0){
            document.cookie = "token= " + response.data.data+";";
            window.location.href = '/'
        }
        else{
            document.getElementById("warnning").innerText = "Tài khoản hoặc mật khẩu sai!"
        }
    }).catch(function(error){
        document.getElementById("warnning").innerText = "Không thể đăng nhập!, Hãy liên hệ với nhà phát triển"
    })
}

export {CallLogin}