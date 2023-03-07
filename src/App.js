import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '~/pages/Home'
import Shop from '~/pages/Shop'
import Product from '~/pages/Product'
import Profile from '~/pages/Profile'
import Payment from '~/pages/Payment'
import Category from '~/pages/Category'
import Cart from '~/pages/Cart'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import { DefaultLayout, AuthenLayout } from './components/Layout'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <AuthenLayout>
                                <Login />
                            </AuthenLayout>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <AuthenLayout>
                                <Register />
                            </AuthenLayout>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/shop"
                        element={
                            <DefaultLayout>
                                <Shop />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/product/{id}"
                        element={
                            <DefaultLayout>
                                <Product />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <DefaultLayout>
                                <Cart />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <DefaultLayout>
                                <Profile />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/catgory"
                        element={
                            <DefaultLayout>
                                <Category />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/payment"
                        element={
                            <DefaultLayout>
                                <Payment />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App
