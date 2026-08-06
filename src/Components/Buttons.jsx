import email from "../assets/email.png"
import lkn from "../assets/linkedin.png"
import "../App.css"
export default function Buttons(){
    return(
//         <a href="mailto:yathindra001@gmail.com" className="email-button">
//     <img src={email} alt="Email logo" />
//     Email
// </a>
<div className="buttons">
        <button className="email-button"
    onClick={() => {
        window.location.href = "mailto:yathindra001@gmail.com";
    }}
>
    <img src={email} alt="Email logo" />
    <span>Email</span>
</button>
        <button className="linkedin-button"
    onClick={() => {
        window.location.href = "mailto:yathindra001@gmail.com";
    }}
>
    <img src={lkn} alt="LinkedIn logo" />
    <span>LinkedIn</span>
</button>
</div>
    )
}