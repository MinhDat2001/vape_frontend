import '../Login/authen.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CallRegister } from './api.js'

const host = 'https://provinces.open-api.vn/api/'
function Register() {
    const navigate = useNavigate();
    var cookie = document.cookie;
    if(cookie !== null && cookie !==""){
        navigate('/')
    }
    var callAPI = (api) => {
        return axios.get(api).then((response) => {
            renderData(response.data, 'city')
        })
    }
    callAPI('https://provinces.open-api.vn/api/?depth=1')

    return (
        <div className="container">
            <div className="auth-form">
                <div className="contain-title">
                    <label>Đăng ký</label>
                </div>
                <div className="form">
                    <div className="contain">
                        <label className="label">Email *</label>
                        <input
                            id="username"
                            className="input"
                            type="email"
                            placeholder="Nhập email của bạn"
                        />
                    </div>
                    <div className="contain">
                        <label className="label">Họ Tên *</label>
                        <input
                            id="name"
                            className="input"
                            type="text"
                            placeholder="Nhập họ tên"
                        />
                    </div>
                    <div className="contain">
                        <label className="label">Điện thoại *</label>
                        <input
                            id="phone"
                            className="input"
                            type="text"
                            placeholder="Nhập số điện thoại"
                        />
                    </div>
                    <div className="contain">
                        <label className="label">Tỉnh/Thành phố</label>
                        <select
                            onChange={callDistrict}
                            id="city"
                            className="input"
                        >
                            <option>Chọn</option>
                        </select>
                    </div>
                    <div className="contain">
                        <label className="label">Quận/Huyện</label>
                        <select
                            onChange={callWard}
                            id="district"
                            className="input"
                        >
                            <option>Chọn</option>
                        </select>
                    </div>
                    <div className="contain">
                        <label className="label">Xã/Phường</label>
                        <select id="ward" className="input">
                            <option>Chọn</option>
                        </select>
                    </div>
                    <div className="contain">
                        <label className="label">Địa chỉ nhà</label>
                        <input
                            id="house"
                            className="input"
                            type="text"
                            placeholder="Đường, số nhà"
                        />
                    </div>
                    <div className="contain">
                        <label className="label">Mật khẩu *</label>
                        <input
                            id="password"
                            className="input"
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </div>
                    <div className="contain">
                        <label className="label">Nhập lại mật khẩu *</label>
                        <input
                            id="re-password"
                            className="input"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                        />
                    </div>
                    <div className="contain">
                        <label id="warnning" className="warnning"></label>
                    </div>
                    <div className="contain">
                        <button
                            id="login-btn"
                            onClick={register}
                            className="primary-btn button"
                        >
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
async function callApiDistrict(api) {
    return await axios.get(api).then((response) => {
        renderData(response.data.districts, 'district')
    })
}
async function callApiWard(api) {
    return await axios.get(api).then((response) => {
        renderData(response.data.wards, 'ward')
    })
}
async function renderData(array, select) {
    let row = ' <option disable value="">Chọn </option>'
    array.forEach((element) => {
        row +=
            '<option data-id=' +
            element.code +
            ' value=' +
            element.name +
            '>' +
            element.name +
            '</option>'
    })
    document.getElementById(select).innerHTML = row
}
async function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
    let row = ' <option value="">Chọn </option>'
    parent.innerHTML = row
}
async function callDistrict(e) {
    var el = e.target.selectedIndex
    var option = document.getElementById('city').childNodes[el + 1]
    removeAllChild(document.getElementById('district'))
    removeAllChild(document.getElementById('ward'))
    callApiDistrict(host + 'p/' + option.getAttribute('data-id') + '?depth=2')
}
async function callWard(e) {
    var el = e.target.selectedIndex
    var option = document.getElementById('district').childNodes[el + 1]
    removeAllChild(document.getElementById('ward'))
    callApiWard(host + 'd/' + option.getAttribute('data-id') + '?depth=2')
}
async function register() {
    document.getElementById('warnning').innerHTML = ''
    if(await validate()===0){
        return
    }
    var email = document.getElementById("username");
    document.cookie = "email="+email.value+";";
    var fullname = document.getElementById("name");
    var phone = document.getElementById("phone");
    var city = document.getElementById("city");
    var district = document.getElementById("district");
    var ward = document.getElementById("ward");
    var addressDetail = document.getElementById("house");
    var password = document.getElementById("password");
    var registerForm = {
        email: email.value,
        name : fullname.value,
        phone : phone.value,
        address : addressDetail.value +', '+ward.options[ward.selectedIndex].text +', '+ district.options[district.selectedIndex].text+', '+city.options[city.selectedIndex].text,
        password : password.value
    }
    CallRegister(registerForm);
}
async function validate() {
    var email = document.getElementById('username')
    var name = document.getElementById('name')
    var phone = document.getElementById('phone')
    var password = document.getElementById('password')
    var re_password = document.getElementById('re-password')
    if (
        email.value === '' ||
        name.value === '' ||
        phone.value === '' ||
        password.value === '' ||
        re_password.value === ''
    ) {
        document.getElementById('warnning').innerHTML =
            'Các trường * không được để trống!'
        return 0
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
        document.getElementById('warnning').innerHTML =
            'Nhập đúng định dạng email!'
        return 0
    }
    if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phone.value)) {
        document.getElementById('warnning').innerHTML =
            'Nhập đúng định dạng số điện thoại!'
        return 0
    }
    if (password.value !== re_password.value) {
        console.log(password);
        console.log(re_password);
        document.getElementById('warnning').innerHTML = 'Mật khẩu không trùng!'
        return 0
    }
    return 1;
}
export default Register
