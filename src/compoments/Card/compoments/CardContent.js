const CardContent = ({alt,description}) =>{
    return(
        <div className="card-content has-text-white card-content-ratio" >
            <p className="is-size-6 has-text-white" id="work-tittle">
                {alt}
            </p>
            <p className="is-size-7 has-text-white" id="work-description">
                {description}
            </p>
        </div>
    )
}
export default CardContent