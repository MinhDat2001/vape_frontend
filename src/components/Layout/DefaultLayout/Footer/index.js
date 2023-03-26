import './Footer.css'
import logo from '~/static/images/logo.png'
import { Link} from 'react-router-dom'
function Footer() {
    var ResponseHTML = (
        <footer className="footerContainer">
            <div className="containfooterContent">
                <div className="row footerContent">
                    <div className="col-md-4 footerCol">
                        <img className="footerIcon" alt="vape logo" src={logo} />
                        <h1>Vape Store</h1>
                    </div>
                    <div className="col-md-4 footerCol">
                        <div className="footerTitle">Liên hệ</div>
                        <ul>
                            <li>Địa chỉ: Ha Noi</li>
                            <li>Số điện thoại: <Link to={"tel:0963632312"}>0963632312</Link></li>
                            <li>Email: <Link to={"mailto:dangminhdat@minhdat.dev"}>dangminhdat@minhdat.dev</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 footerCol">
                        <div className="footerTitle">Về chúng tôi</div>
                        <ul>
                            <li>Về chúng tôi</li>
                            <li><Link to={"#"}>Chính sách thanh toán</Link></li>
                            <li><Link to={"#"}>Chính sách thanh đổi trả</Link></li>
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
    return ResponseHTML
}
export default Footer
