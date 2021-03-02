import CenterContainer from "../centerContainer"
import Logo from "../logo"
import NavItems from "../navItems"

const Nav = () =>{
    return(
        <nav className="navbar is-fixed-top has-background-black has-text-white custom-nav">
            <CenterContainer cName="has-background-black">

                <Logo/>
                    
                <NavItems/>
                    
            </CenterContainer>
        </nav>
    )
}

export default Nav

