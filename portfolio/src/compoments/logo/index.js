import Burger from "../burger"

function Logo( {toggleBurgerMenu}){
    return(
        <div className="navbar-brand">

            <a className="navbar-item is-size-2 pt-3" href="/">
                <img className="nav-img" id="icon-href" data-target="home-2" alt="logo" src="./images/logo.png" />
            </a>

        <Burger toggleBurgerMenu={toggleBurgerMenu}/>

        </div>    
    )
}

export default Logo