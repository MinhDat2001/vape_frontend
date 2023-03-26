import axios from 'axios'
import {authRegisterHost} from '~/pages/Host.js'
function CallRegister(authForm){
    axios({
        method : 'post',
        url: authRegisterHost,
        data: authForm
    }).then((response) => {
        if(response.data.status === 0){
            document.getElementById('warnning').style.color = 'var(--primary-color)'
            document.getElementById('warnning').innerHTML = 'Đăng ký thành công!'
        }
        else{
            document.getElementById("warnning").innerText = "Mã không chính xác hoặc hết thời hạn"
        }
    }).catch(function(error){
        document.getElementById("warnning").innerText = "Lỗi hệ thống!, Hãy liên hệ với nhà phát triển"
    })
}

export {CallRegister}