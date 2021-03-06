import FooterLinks from "../FooterLinks/index.js"
import list from "./list.js"
import "./style.sass"

const Footer = () =>{
    return(
        <footer className="footer has-background-black has-text-white footer-mod pb-2 pt-2" id="contactme">
            <div className="content has-text-centered ">
                <p className="mb-0">
                    {
                        list.map((l, index) =>{
                            return <FooterLinks {...l} key={index}/>
                        })
                    }
                </p>
            </div>
        </footer>

    )
}

export default Footer