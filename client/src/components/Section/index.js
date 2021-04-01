
const Section= ({children, id, cName}) =>{
    return(
        <section className={`hero is-fullheight ${cName? cName:""}`} id={id}>
            {children}
        </section>

    )
}

export default Section