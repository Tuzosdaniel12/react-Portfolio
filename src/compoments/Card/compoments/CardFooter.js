
const CardFooter = ({gitrepo, link}) =>{
    return(
        <footer className="card-footer has-text-centered pt-2">
            <small className="has-text-centered has-text-danger" style={{width: '100%'}}>
                <a className="tag is-black has-text-danger is-size-7" id="repo" href={gitrepo} target="_blank">Git Repo</a>-
                <a className="tag is-black has-text-danger is-size-7" id="demo" href={link} target="_blank">Live Demo</a>
            </small>
        </footer>
    )
}
export default CardFooter