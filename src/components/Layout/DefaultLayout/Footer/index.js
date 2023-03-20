import './Footer.css'
import logo from '~/static/images/logo.png'
function Footer() {
    return (
        <footer className="footerContainer">
            <div className="containfooterContent">
                <div className="row footerContent">
                    <div className="col-md-4 footerCol">
                        <img className="footerIcon" src={logo} />
                        <h1>Vape Store</h1>
                    </div>
                    <div className="col-md-4 footerCol">
                        <div className="footerTitle">Liên hệ</div>
                        <ul>
                            <li>Địa chỉ: Ha Noi</li>
                            <li>Số điện thoại: 012345678</li>
                            <li>Email: vs@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-md-4 footerCol">
                        <div className="footerTitle">Về chúng tôi</div>
                        <ul>
                            <li>Về chúng tôi</li>
                            <li>Chính sách thanh toán</li>
                            <li>Chính sách thanh đổi trả</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="containCoppyRight">
                <div className="coppyRight">
                    <div className="">Copyright 2023 © VAPE SHOP</div>
                    <div>Website made by VS</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
