import gb from "../assets/github.png"
import x from "../assets/twitter.png"
import fb from "../assets/facebook.png"
import yt from "../assets/youtube.png"
import insta from "../assets/insta.png"
export default function Footer(){
    return(
        <>
        <div className="footer">
            <img src={gb} alt="github logo"/>
            <img src={insta} alt="instagram logo"/>
            <img src={fb} alt="facebook logo"/>
            <img src={x} alt="twitter/x logo"/>
            <img src={yt} alt="youtube logo"/>
        </div>
        <p> Yathindra Prasad N, &Copy 2026. All rights reserved.</p>
        </>
    )
}