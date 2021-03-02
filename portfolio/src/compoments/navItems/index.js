function NavItems(){
    return(
        <div id="navMenu" className="navbar-menu has-background-black">
            <div className="navbar-end custom-nav-menu">
                <a href="#home" data-target="home" className="navbar-item navbar-mod">Home</a>
                <a href="#aboutme" data-target="about" className="navbar-item navbar-mod">About Me</a>
                <a href="#examples" data-target="work-examples" className="navbar-item">Work</a>
                <a href="./docs/DanielSoledadResume.pdf" className="navbar-item">Resume</a>
            </div>
        </div>
    )
}

export default NavItems