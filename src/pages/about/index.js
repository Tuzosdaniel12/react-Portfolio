import Columns from "../../compoments/Columns";
import Column from "../../compoments/Colunm";
import Icon from "../../compoments/icon/icon";
import Section from "../../compoments/Section";
import iconList from "./iconList"
import "./style.sass"

const About = () => {
     
    return(
        <Section cName="pb-6 hide has-background-black" id="aboutme">
            <Columns columnsName ="is-tablet about-me-div">
                <Column columnStyles="">
                   <div className="is-flex is-justify-content-center">
                        <img className alt="Me" src="./images/me.png" />
                   </div>
                </Column>

                <Column columnStyles="is-two-thirds-desktop has-text-white has-text-centered-mobile is-flex is-flex-direction-column is-justify-content-center">
                    <h1 className="is-size-4 ">About Me</h1>
                    <p className="is-size-5 pb-5">
                        Hello my name is Daniel. I'm a Fullstack Development student at the University of Washington. The art of Coding has brought me so much joy in so many ways. I love to explore, create, and challenge myself to learn new techniques. Please don't hesitate to reach out to me if you have any questions; I am always eager to talk shop. Let's code!!!
                    </p>

                    <div className="has-text-centered has-text-danger">
                        {
                            iconList.map(({icon}) =><Icon icon={icon}/>)
                        }
                    </div> 

                </Column>
            </Columns>
        </Section>
    )
}

export default About   