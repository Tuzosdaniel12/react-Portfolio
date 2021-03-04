function Burger({toggleBurgerMenu}){
    return(
        <span className="navbar-burger burger" data-target="navMenu" onClick={toggleBurgerMenu}>
                <span />
                <span />
                <span />
        </span>
    )
}

export default Burger