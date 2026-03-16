import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PageBackground from './PageBackground';
import './PageShell.css';

export default function PageLayout({ children, mainClassName }) {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageBackground />
            <main className={mainClassName}>{children}</main>
            <Footer />
        </div>
    );
}
