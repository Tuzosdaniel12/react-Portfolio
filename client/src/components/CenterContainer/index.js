const CenterContainer = ({cName, children}) =>{
    return(
        <div className={`container ${cName}`}>{children}</div>
    )
}

export default CenterContainer