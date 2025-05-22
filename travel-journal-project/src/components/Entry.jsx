
export default function Entry(props){
    console.log(props)
    return(
        <article className="entry-journal">
            <div className="image-container">
                <img className="entry-image" src={props.img?.src} alt={props.img?.alt} />
            </div>
            <div>
                <div className="entry-location">
                    <img className="marker" src="src/assets/steering-wheel.png" alt="" />
                    <p>{props.brand}</p>
                    <a href={props.link}>View the Car Brand</a>
                </div>
                <div className="entry-desc">
                    <h1>{props.model}</h1>
                    <h4>{props.date}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </article>
    )
}