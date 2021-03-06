import Icon from "../icon/icon"

const FooterLinks = ({href, icon, margin,t}) =>{
    return(
        <strong className={`footer-links ${margin}`}>
            <a className="icon-color" rel="noreferrer" target="_blank" href={href}>
                <Icon icon={icon}/>
            </a>
        </strong>
    )
}

export default FooterLinks