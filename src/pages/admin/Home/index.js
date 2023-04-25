import './adminHome.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { GET_ALL_CATEGORY } from '../Category/api';
import axios from 'axios';
function AdminLogin() {
    var adminContent = (
        <div className="admin_content">
            <div className="contain_box">
                <div className="box_item">
                    <div className="contain_title">
                        <label>User</label>
                    </div>
                </div>
                <div className="box_item">
                    <Link to={'/admin/user'}>User</Link> : 200
                </div>
                <div className="box_item">
                    <Link to={'/admin/user'}>User Deleted</Link> : 200
                </div>
                <div className="box_item">
                    <Link to={'/admin/user'}>New User</Link>
                </div>
            </div>
            <div className="contain_box">
                <div className="box_item">
                    <div className="contain_title">
                        <label>Product</label>
                    </div>
                </div>
                <div className="box_item">
                    <Link to={'/admin/product'}>Product</Link> : 200
                </div>
                <div className="box_item">
                    <Link to={'/admin/user'}>New Product</Link>
                </div>
                <div className="box_item">
                    <Link to={'/admin/user'}>Delete Product</Link>
                </div>
            </div>
            <div className="contain_box">
                <div className="box_item">
                    <div className="contain_title">
                        <label>Category</label>
                    </div>
                </div>
                <div className="box_item">
                    <Link to={'/admin/user'}>Category</Link> : 200
                </div>
                <div className="box_item">
                    <Link to={'/admin/user'}>New Category</Link>
                </div>
                <div className="box_item">
                    <Link to={'/admin/user'}>Delete Category</Link>
                </div>
            </div>
            <div className="contain_box">
                <div className="box_item">
                    <div className="contain_title">
                        <label>Setting</label>
                    </div>
                </div>
                <div className="box_item">
                    <Link to={'/setting'}>Location</Link>
                </div>
                <div className="box_item">
                    <Link to={'/setting'}>Contact</Link>
                </div>
                <div className="box_item">
                    <Link to={'/setting'}>Gmail API</Link>
                </div>
            </div>
        </div>
    );
    return adminContent;
}

export default AdminLogin;
