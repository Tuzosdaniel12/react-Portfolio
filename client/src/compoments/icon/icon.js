const Icon = ({icon,text}) =>{

    return(
        <i className={`${icon}`}>{text?text:""}</i>
    )
}

export default Icon