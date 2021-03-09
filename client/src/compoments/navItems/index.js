import { Link } from "react-router-dom";




function NavItems({toggleBurgerMenu}){
 
    return(
        <div id="navMenu" className="navbar-menu has-background-black">
            <div className="navbar-end custom-nav-menu">
                <a to="/" data-target="home" className="navbar-item navbar-mod" onClick={toggleBurgerMenu}>Home</a>
                <a to="/About" data-target="about" className="navbar-item navbar-mod" onClick={toggleBurgerMenu}>About Me</a>
                <a to="/Work" data-target="work-examples" className="navbar-item navbar-mod" onClick={toggleBurgerMenu}>Work</a>
                <a href="./docs/DanielSoledadResume.pdf" className="navbar-item navbar-mod" onClick={toggleBurgerMenu} >Resume</a>
            </div>
        </div>
    )
}

export default NavItems



