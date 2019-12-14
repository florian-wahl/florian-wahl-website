import globalStyles from "../styles/global";

const Layout = (props) => (
    <div>
        {props.children}
        <style jsx global>{globalStyles}</style>
    </div>
);

export default Layout;