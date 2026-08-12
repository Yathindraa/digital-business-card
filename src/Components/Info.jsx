import pp from "../assets/ypimg.jpeg"
import "../App.css"
export default function Info(){
    return(
        <div className="info">
            <img className="profile-picture" src={pp} alt="Profile Picture"/>
            <h3> Yathindra Prasad N </h3>
            <p> Frontend Developer </p>
        </div>
    )
}