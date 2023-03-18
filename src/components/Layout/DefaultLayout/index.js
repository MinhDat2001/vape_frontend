import Header from './Header';
import Footer from './Footer';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
