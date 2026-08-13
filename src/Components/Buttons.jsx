import email from "../assets/email.png"
import lkn from "../assets/linkedin.png"

export default function Buttons(){
    return(<div className="buttons"><a href="mailto:yathindra001@gmail.com"
    className="email-button">
    <img src={email} alt="Email" />
    <span>Email</span>
</a>

<a
    href="https://www.linkedin.com/in/yathindra-prasad-n-a7988a217/"
    target="_blank"
    rel="noopener noreferrer"
    className="linkedin-button"
>
    <img src={lkn} alt="LinkedIn" />
    <span>LinkedIn</span>
</a>
</div>
/* <div className="buttons">
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
        window.location.href = "https://www.linkedin.com/in/yathindra-prasad-n-a7988a217/?skipRedirect=true","_blank", 
            "noopener,noreferrer";
    }} */

//     <!-- HTML Button -->
// <button onclick="redirectToLinkedIn()">Visit LinkedIn Profile</button>

// <script>
// function redirectToLinkedIn() {
//     window.location.href = "https://www.linkedin.com/in/yathindra-prasad-n-a7988a217/?skipRedirect=true";
// }
// </script>

// >
//     <img src={lkn} alt="LinkedIn logo" />
//     <span>LinkedIn</span>
// </button>
// </div>

    )
}