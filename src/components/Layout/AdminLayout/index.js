import AdminFooter from './Footer'
import AdminHeader from './Header'
import Navbar from './Navbar'
function AdminLayout({children}) {
    return (
        <div>
            <AdminHeader />
            <div className="container">
                <div className="navbar">
                    <Navbar />
                </div>

                <div className="content">{children}</div>
            </div>
            <AdminFooter />
        </div>
    )
}

export default AdminLayout
