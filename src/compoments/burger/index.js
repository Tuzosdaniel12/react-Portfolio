function Burger({toggleBurgerMenu}){
    return(
        <span className="navbar-burger burger" data-target="navMenu" onClick={toggleBurgerMenu}>
                <span className="has-text-white has-text-weight-bold"/>
                <span className="has-text-white has-text-weight-bold"/>
                <span className="has-text-white has-text-weight-bold"/>
        </span>
    )
}

export default Burger