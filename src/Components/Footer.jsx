import gb from "../assets/github.png"
import x from "../assets/twitter.png"
import fb from "../assets/facebook.png"
import yt from "../assets/youtube.png"
import insta from "../assets/insta.png"
import "../App.css"
export default function Footer(){
    return(
        <div className="footer">
           <a  href="https://github.com/Yathindraa" target="_blank"><img src={gb} alt="github logo" /></a>
           <a href="https://www.instagram.com/yathindra_yp/" target="_blank"> <img src={insta} alt="instagram logo"/> </a>
           <a href="https://www.facebook.com/yathindraaa" target="_blank"> <img src={fb} alt="facebook logo"/> </a>
           <a href="https://x.com/yathindra_yp" target="_blank">  <img src={x} alt="twitter/x logo"/> </a>
           <a href="https://www.youtube.com/@yathindra_yp" target="_blank">  <img src={yt} alt="youtube logo"/> </a>
            <p className="copyright">Yathindra Prasad N, © 2026. All rights reserved.</p>
        </div>
    )
}