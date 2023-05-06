import logo from '~/static/images/logo.png';
import user from '~/static/images/user.png';
import './header.css';

import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '~/pages/Host';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminHeader() {
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    var login = false;
    if (
        (window.location.pathname != '/admin/login' && token !== undefined) ||
        token !== null ||
        token.trim() !== ''
    ) {
        // console.log('token:' + token);
        window.onload = axios
            .get(getUser, {
                mode: 'cors',
                headers: {
                    token: 'Vape ' + token,
                },
            })
            .then((response) => {
                if (response.data.status === 0) {
                    login = true;
                    console.log('login ---------------');
                } else {
                    console.log('call error');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const navigate = useNavigate();
    if (login === false) {
        window.location.pathname = '/admin/login';
        return;
    }
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
