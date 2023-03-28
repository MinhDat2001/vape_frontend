import axios from 'axios'
import {forgotPasswordHost} from '~/pages/Host.js'
function CallForgotPassword(emailForm){
    axios({
        method : 'post',
        url: forgotPasswordHost,
        data: emailForm
    }).then((response) => {
        if(response.data.status === 0){
            window.location.href = '/forgot-password/auth'
        }
        else{
            document.getElementById("warnning").innerText = "Xảy ra sự cố, vui lòng thử lại!"
        }
    }).catch(function(error){
        document.getElementById("warnning").innerText = "Sự cố!, Hãy liên hệ với nhà phát triển"
    })
}

export {CallForgotPassword}