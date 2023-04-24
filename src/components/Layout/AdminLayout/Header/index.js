import logo from '~/static/images/logo.png';
import user from '~/static/images/user.png';
import './header.css';
import { Link } from 'react-router-dom';
function AdminHeader() {
    var adminHeader = (
        <header>
            <div className="admin_header">
                <Link to={'/admin'}>
                    <img className="admin_logo" src={logo} alt="logo" />
                </Link>
                <img className="admin_avatar" src={user} alt="user" />
            </div>
        </header>
    );
    return adminHeader;
}

export default AdminHeader;
