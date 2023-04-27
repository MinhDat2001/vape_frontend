import logo from '~/static/images/logo.png';
import user from '~/static/images/user.png';
import './header.css';

import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '~/pages/Host';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
