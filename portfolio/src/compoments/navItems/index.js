import { Link } from "react-router-dom";




function NavItems({toggleBurgerMenu}){
 
    return(
        <div id="navMenu" className="navbar-menu has-background-black">
            <div className="navbar-end custom-nav-menu">
                <Link to="/" data-target="home" className="navbar-item navbar-mod " onClick={toggleBurgerMenu}>Home</Link>
                <Link to="/About" data-target="about" className="navbar-item navbar-mod" onClick={toggleBurgerMenu}>About Me</Link>
                <Link to="/Work" data-target="work-examples" className="navbar-item" onClick={toggleBurgerMenu}>Work</Link>
                <Link to="./docs/DanielSoledadResume.pdf" className="navbar-item" onClick={toggleBurgerMenu} >Resume</Link>
            </div>
        </div>
    )
}

export default NavItems



