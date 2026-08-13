import pp from "../assets/ypimg.jpeg"

export default function Info(){
    return(
        <div className="info">
            <img className="profile-picture" src={pp} alt="Profile Picture"/>
            <h1> Yathindra Prasad N </h1>
            <h2> Frontend Developer </h2>
        </div>
    )
}