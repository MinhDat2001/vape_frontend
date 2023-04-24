import { default as userHome } from '~/pages/user/Home';
import Shop from '~/pages/user/Shop';
import Product from '~/pages/user/Product';
import Profile from '~/pages/user/Profile';
import Payment from '~/pages/user/Payment';
import Category from '~/pages/user/Category';
import Cart from '~/pages/user/Cart';
import ForgotPassword from '~/pages/user/ForgotPassword';
import ForgotPasswordAuth from '~/pages/user/ForgotPasswordAuth';
import ResetPassword from '~/pages/user/ResetPassword';
import { default as userLogin } from '~/pages/user/Login';
import { default as userRegisterAuth } from '~/pages/user/RegisterAuth';
import { default as userRegister } from '~/pages/user/Register';

import { default as adminHome } from '~/pages/admin/Home';
import { default as adminLogin } from '~/pages/admin/Login';
import { default as adminProduct } from '~/pages/admin/Product';
import { default as adminCategory } from '~/pages/admin/Category';
import { default as adminUser } from '~/pages/admin/User';
import Setting from '~/pages/admin/Setting';

import { DefaultLayout, AdminLayout } from '~/components/Layout';
import Contact from '~/pages/user/Contact';
import AddProduct from '~/pages/admin/Product/add-product';
import UpdateProduct from '~/pages/admin/Product/update-product';
import AddCategory from '~/pages/admin/Category/add-category';
import UpdateCategory from '~/pages/admin/Category/update-category';
import UpdateUser from '~/pages/admin/User/update-user';
import AddUser from '~/pages/admin/User/add-user';
import History from '~/pages/user/History';
import ChangeInfo from '~/pages/user/ChangeInfo';
import LoginGoogle from '~/pages/user/LoginGoogle';

const userRoute = [
    { path: '', component: userHome, Layout: DefaultLayout },
    { path: '/login', component: userLogin, Layout: DefaultLayout },
    { path: '/login-google', component: LoginGoogle, Layout: DefaultLayout },
    { path: '/login-facebook', component: LoginGoogle, Layout: DefaultLayout },
    { path: '/register', component: userRegister, Layout: DefaultLayout },
    {
        path: '/register/auth',
        component: userRegisterAuth,
        Layout: DefaultLayout,
    },
    { path: '/product', component: Shop, Layout: DefaultLayout },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        Layout: DefaultLayout,
    },
    {
        path: '/forgot-password/auth',
        component: ForgotPasswordAuth,
        Layout: DefaultLayout,
    },
    {
        path: '/reset-password',
        component: ResetPassword,
        Layout: DefaultLayout,
    },
    {
        path: '/product/{id}',
        component: Product,
        Layout: DefaultLayout,
    },
    { path: '/profile', component: Profile, Layout: DefaultLayout },
    { path: '/contact', component: Contact, Layout: DefaultLayout },
    { path: '/category', component: Category, Layout: DefaultLayout },
    { path: '/cart', component: Cart, Layout: DefaultLayout },
    { path: '/payment', component: Payment, Layout: DefaultLayout },
    { path: '/history', component: History, Layout: DefaultLayout },
    { path: '/change-info', component: ChangeInfo, Layout: DefaultLayout },
];
const adminRoute = [
    { path: '/admin', component: adminHome, Layout: AdminLayout },
    { path: '/admin/login', component: adminLogin, Layout: null },
    { path: '/admin/product', component: adminProduct, Layout: AdminLayout },
    {
        path: '/admin/product/:productId',
        component: UpdateProduct,
        Layout: AdminLayout,
    },
    {
        path: '/admin/product/add',
        component: AddProduct,
        Layout: AdminLayout,
    },
    { path: '/admin/category', component: adminCategory, Layout: AdminLayout },
    {
        path: '/admin/category/:categoryId',
        component: UpdateCategory,
        Layout: AdminLayout,
    },
    {
        path: '/admin/category/add',
        component: AddCategory,
        Layout: AdminLayout,
    },
    { path: '/admin/user', component: adminUser, Layout: AdminLayout },
    {
        path: '/admin/user/:userId',
        component: UpdateUser,
        Layout: AdminLayout,
    },
    {
        path: '/admin/user/add',
        component: AddUser,
        Layout: AdminLayout,
    },
    { path: '/admin/setting', component: Setting, Layout: AdminLayout },
];

export { adminRoute, userRoute };
