import './contact.css'
import { React, ReactDOM } from 'react'
import Iframe from 'react-iframe'
function Contact() {
    return (
        <div className="contain row">
            <div className="form-contact col-md-4">
                <div className="input">
                    <div className="title">Liên hệ với chúng tôi</div>
                </div>
                <div className="input">
                    <input
                        id="email"
                        type="text"
                        placeholder="Nhập email của bạn"
                    />
                </div>
                <div className="input">
                    <input
                        id="phone"
                        type="text"
                        placeholder="Nhập số điện thoại của bạn"
                    />
                </div>
                <div className="input">
                    <input
                        id="name"
                        type="text"
                        placeholder="Nhập họ tên của bạn"
                    />
                </div>
                <div className="input">
                    <label id="warnning"></label>
                </div>
                <div className="input">
                    <button onClick={sendRequest}>Gửi</button>
                </div>
            </div>
            <div className="conatin-map col-md-8">
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.292513152183!2d105.78524921495469!3d20.980908494785965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1679306312636!5m2!1svi!2s"
                    width="100%"
                    height="640px"
                    id=""
                    className=""
                    display="block"
                    position="relative"
                />
            </div>
        </div>
    )
}

function sendRequest() {
    validate()
}
function validate() {
    document.getElementById('warnning').innerHTML = ''
    var email = document.getElementById('email')
    var name = document.getElementById('name')
    var phone = document.getElementById('phone')
    if (email.value === '' || phone.value === '' || name.value === '') {
        document.getElementById('warnning').innerHTML = 'Không được để trống!'
        return
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
        document.getElementById('warnning').innerHTML =
            'Nhập đúng định dạng email!'
        return
    }
    if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phone.value)) {
        document.getElementById('warnning').innerHTML =
            'Nhập đúng định dạng số điện thoại!'
        return
    }
    document.getElementById('warnning').style.color = 'var(--primary-color)'
    document.getElementById('warnning').innerHTML =
        'Xin cảm ơn! <br/> Chúng tôi sẽ sớm liên hệ với bạn'
}
export default Contact
