import './navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/admin')
    }
    const navigateProduct = () => {
        navigate('/admin/product')
    }
    const navigateCategory = () => {
        navigate('/admin/category')
    }
    const navigateUser = () => {
        navigate('/admin/user')
    }
    const navigateSetting = () => {
        navigate('/admin/setting')
    }
    var navbar = (
        <div className="admin_navbar">
            <div className='contain_controll'>
                <div onClick={navigateHome} className='controll'>
                    Home
                </div>
                <div onClick={navigateProduct} className='controll'>
                    Product
                </div>
                <div onClick={navigateCategory} className='controll'>
                    Category
                </div>
                <div onClick={navigateUser} className='controll'>
                    User
                </div>
                <div onClick={navigateSetting} className='controll'>
                    Setting
                </div>
            </div>
        </div>
    )
    return navbar
}

export default Navbar
