const Column = ({children, columnStyles}) =>{
    return(
        <div className={`column ${columnStyles}`}>
            {children}
        </div>    
    )
}

export default Column