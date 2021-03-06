import CenterContainer from "../centerContainer"
import Logo from "../logo"
import NavItems from "../navItems"

const Nav = () =>{
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }
    return(
        <nav className="navbar is-fixed-top has-background-black has-text-white custom-nav">
            <CenterContainer cName="has-background-black">

                <Logo toggleBurgerMenu={toggleBurgerMenu}/>
                    
                <NavItems toggleBurgerMenu={toggleBurgerMenu}/>
                    
            </CenterContainer>
        </nav>
    )
}

export default Nav

