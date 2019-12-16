import globalStyles from "../styles/global";
import Nav from "./nav";

const Layout = (props) => (
    <div>
        <Nav />
        {props.children}
        <style jsx global>{globalStyles}</style>
    </div>
);

export default Layout;