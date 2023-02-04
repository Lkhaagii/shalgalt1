import React from "react";
import "./green.css"
import Zurag from "../../colors/mod.jpg"

const Green = () =>{
    const text = [
        {
            key:1,
            img:Zurag,
            title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio at ullam vitae omnis exercitationem adipisci sunt similique nostrum! Rem, laudantium."
        }
    ]
    return(
        <div>
        {text.map(text)};
        <div className="map">
             <img src={text.img} alt="" />
            <p>{text.title}</p>
            <p>{text.title}</p>
            <p>{text.title}</p>
        </div>
    </div>
    )
}

export default Green