import AdminFooter from './Footer';
import AdminHeader from './Header';
import Navbar from './Navbar';
import './layout.css';
import { getUser } from '~/pages/Host';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
function AdminLayout({ children }) {
    const navigate = useNavigate();

    const [login, setLogin] = useState(true);

    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    if (token !== undefined || token !== null || token.trim() !== '') {
        window.onload = axios
            .get(getUser, {
                mode: 'cors',
                headers: {
                    token: 'Vape ' + token,
                },
            })
            .then((response) => {
                if (response.data.status === 0) {
                    // setLogin(true);
                    // console.log('login da bang true');
                } else {
                    setLogin(false);
                    // console.log('login da bang false');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // console.log(login);

    useEffect(() => {
        // console.log('vao use effect');
        // console.log(login);
        if (login === false) {
            navigate('/admin/login');
            return;
        }
    }, [login]);

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
