import "./style.css"
const Section= ({children, id}) =>{
    return(
        <section className="hero is-fullheight" {...id}>
            {children}
        </section>

    )
}

export default Section