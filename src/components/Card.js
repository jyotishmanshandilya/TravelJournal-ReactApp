export default function Card(props){
    const image = require(`../images/${props.item.image}`);
    

    return (
        <div className="card">
            <img className="card--image" src={image} alt ={`Picture of ${props.item.destination} trip`} />
            <div className="card--title">
                <h2 className="loc">{props.item.destination}</h2>
            </div>
            <div className="card--stats">
                
                <p className="stat"><strong>Duration :</strong> {props.item.duration} days</p>
                <p className="stat"><strong>Cost Effectiveness : </strong> {props.item.stats.costeffective}</p>
                <p className="stat"><strong>Fun Rating : </strong> {props.item.stats.fun}</p>
                <p className="stat"><strong>Revist :</strong> {props.item.stats.revisit}</p>
            </div>
        </div>
    );
}