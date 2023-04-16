import AdminFooter from './Footer';
import AdminHeader from './Header';
import Navbar from './Navbar';
import './layout.css';
function AdminLayout({ children }) {
    return (
        <div>
            <AdminHeader />
            <div className="admin_container row">
                <div className="nav_bar col-md-2">
                    <Navbar />
                </div>
                <div className="content col-md-10">{children}</div>
            </div>
            <AdminFooter />
        </div>
    );
}

export default AdminLayout;
