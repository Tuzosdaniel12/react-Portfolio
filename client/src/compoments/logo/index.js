import Burger from "../Burger"
import { Link } from "react-router-dom";

function Logo( {toggleBurgerMenu}){
    return(
        <div className="navbar-brand">

            <Link className="navbar-item is-size-2 pt-3" to="/">
                <img className="nav-img" id="icon-href" data-target="home-2" alt="logo" src="./images/logo.png" />
            </Link>

        <Burger toggleBurgerMenu={toggleBurgerMenu}/>

        </div>    
    )
}

export default Logo