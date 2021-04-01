
import Card from "../../compoments/Card"
import CenterContainer from "../../compoments/CenterContainer"
import Columns from "../../compoments/Columns"
import Column from "../../compoments/Colunm"
import Section from "../../compoments/Section"
import listOfWork from "./listOfWork"
import "./style.sass"

const Work = () =>{
    return(
        <Section cName={`hide pt-6 pb-6 ${window.location.pathname === "/Work"? "fadeIn":"fadeOut"}`} id="work">
            <CenterContainer cName="">
                <Columns columnsName="is-mobile is-multiline firstblock">
                    
                    {
                        listOfWork.map((list) =>{
                            return<Column columnStyles={`is-full-mobile is-half-tablet is-one-third-desktop mb-3 work-example-card card-has-ratio`}>
                                <Card {...list}/>
                            </Column>
                        })
                        
                    }
                    
                </Columns>
            </CenterContainer>
        </Section>
    )
}

export default Work