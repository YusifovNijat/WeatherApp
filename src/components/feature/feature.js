import './feature.css';


const Feature = ({data, pictures, info, name}) => {

    return(      
        <div className="features">
            <img src={pictures} alt="no"/>
            <span>{name}</span>
            {data.main ? <h2>{info}</h2> : null}
        </div>
        )
}

export default Feature;