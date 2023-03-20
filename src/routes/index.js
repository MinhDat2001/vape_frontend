import { default as userHome } from '~/pages/user/Home'
import Shop from '~/pages/user/Shop'
import Product from '~/pages/user/Product'
import Profile from '~/pages/user/Profile'
import Payment from '~/pages/user/Payment'
import Category from '~/pages/user/Category'
import Cart from '~/pages/user/Cart'
import { default as userLogin } from '~/pages/user/Login'
import { default as userRegister } from '~/pages/user/Register'

import { default as adminHome } from '~/pages/admin/Home'
import { default as adminLogin } from '~/pages/admin/Login'
import { default as adminProduct } from '~/pages/admin/Product'
import { default as adminCategory } from '~/pages/admin/Category'
import Setting from '~/pages/admin/Setting'

import { DefaultLayout, AuthenLayout, AdminLayout } from '~/components/Layout'
import Contact from '~/pages/user/Contact'

const userRoute = [
    { path: '', component: userHome, Layout: DefaultLayout },
    { path: '/login', component: userLogin, Layout: DefaultLayout },
    { path: '/register', component: userRegister, Layout: DefaultLayout },
    { path: '/product', component: Shop, Layout: DefaultLayout },
    {
        path: '/product/{product-slug}',
        component: Product,
        Layout: DefaultLayout,
    },
    { path: '/profile', component: Profile, Layout: DefaultLayout },
    { path: '/contact', component: Contact, Layout: DefaultLayout },
    { path: '/category', component: Category, Layout: DefaultLayout },
    { path: '/cart', component: Cart, Layout: DefaultLayout },
    { path: '/payment', component: Payment, Layout: DefaultLayout },
]
const adminRoute = [
    { path: '/admin', component: adminHome, Layout: AdminLayout },
    { path: '/admin/login', component: adminLogin, Layout: null },
    { path: '/admin/product', component: adminProduct, Layout: AdminLayout },
    { path: '/admin/category', component: adminCategory, Layout: AdminLayout },
    { path: '/admin/setting', component: Setting, Layout: AdminLayout },
]

export { adminRoute, userRoute }
