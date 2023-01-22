import React from "react"
import twitter from "../Images/twitter-sign.png"
import facebook from "../Images/facebook.png"
import ig from "../Images/ig.png"
import github from "../Images/github.png"

export default function Footer(){
    return (
        <div className="footer-div" >
            <div className="img" >
            <img src={twitter} alt="twitter" width="30px" height="30px" />
            </div>
            <div className="img" >
            <img src={facebook} alt="facebook" width="30px" height="30px" />
            </div>
            <div className="img" >
            <img src={ig} alt="instagram" width="30px" height="30px" />
            </div>
            <div className="img" >
            <img src={github} alt="github" width="30px" height="30px" />
            </div>
        </div>
    )
}