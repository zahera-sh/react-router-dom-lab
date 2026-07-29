import { Link } from "react-router";

function NavBar() {

    return (
        <>

            <div className="nav-container">

                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/new-product">New Products</Link>

            </div>

        </>
    );
};

export default NavBar;