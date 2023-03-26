import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { adminRoute, userRoute } from '~/routes/index';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {adminRoute.map((route, index) => {
                        const Layout =
                            route.Layout === null ? Fragment : route.Layout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {userRoute.map((route, index) => {
                        const Layout =
                            route.Layout === null ? Fragment : route.Layout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
