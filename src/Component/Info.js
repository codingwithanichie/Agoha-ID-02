import React from "react"
import ReactDOM from "react-dom/client"
import handshake from "../Images/handshake.png"



export default function Info(){
    return (
        <div className="info-section" >
        <img src={handshake} width="350px" height="300px" />
        <h1>Agoha Samuel</h1>
        <h3>Frontend Developer</h3>
        <a>agohasamuel.website</a>
        <div className="btn" >
            <button className="first-button" >Email</button>
            <button className="second-button" >Linkedin</button>
        </div>
        </div>
    )
}

