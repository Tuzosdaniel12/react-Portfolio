const CardImg =({link, image, alt})=>{
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <a href={link} target="_blank">
                        <img id="work-example-img" src={image} alt={alt} />
                    </a>
                </figure>
            </div>
        </div>
    )
}

export default CardImg