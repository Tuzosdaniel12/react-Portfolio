const Icon = ({icon,text}) =>{
    console.log(icon)
    return(
        <i className={`${icon}`}>{text?text:""}</i>
    )
}

export default Icon