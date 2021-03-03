import CardContent from "./compoments/CardContent"
import CardFooter from "./compoments/CardFooter"
import CardImg from "./compoments/CardImg"

const Card = (props) =>{
    return(
        <div className="card-wrapper">
            <CardImg {...props}/>
            <CardContent {...props}/>
            <CardFooter {...props}/>
        </div>
    )
}

export default Card