const Columns =({children, columnsName})=>{
    return(
        <div className={`section columns ${columnsName}`}>
            {children}
        </div>     
    )
}

export default Columns