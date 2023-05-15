import { Link } from "react-router-dom";
import './Navigation.css';
function Navigation(){
    return (
        <div className="navbar">
            <h3><Link className= "navbar-title" to="/">Home</Link></h3>
            <ul className="navbar-links">
                <li ><Link className="nav-item" to="/road">Roads & Infrastructure Issues</Link></li>
                <li ><Link className="nav-item" to="/garbage">Garbage Issues</Link></li>
                <li ><Link className="nav-item" to="/pollution">Pollution Issues</Link></li>
            </ul>
        </div>
    );
}


export default Navigation;