import globalStyles from "../styles/global";
import Nav from "./nav";
import Head from "./head";
import Footer from "./footer";

const Layout = (props) => (
    <div>
        <Head title={props.title} />
        
        <Nav />

        <div className="page-div">
            {props.children}
        </div>

        <Footer />
        <style jsx global>{globalStyles}</style>
    </div>
);

export default Layout;