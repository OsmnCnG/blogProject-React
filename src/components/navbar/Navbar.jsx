import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Can's Blog</h1>
            <div className="links">
                {/* <a href="/home">Home</a>
                <a href="/create"
                    style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: "8px",
                    }}
                >New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: "8px",
                    }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;