import React from "react";
import "./red.css"
import Zurag from "../../colors/mod.jpg"


const Red = () =>{
    const text = [
        {
            key:1,
            img:Zurag,
            title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio at ullam vitae omnis exercitationem adipisci sunt similique nostrum! Rem, laudantium."
        }
    ]
    return(
        <div>
            <div className="map">
            {text.map(text)};
            
                 <img src={text.img} alt="" />
                <p>{text.title}</p>
                <p>{text.title}</p>
                <p>{text.title}</p>
            </div>
        </div>
    )
}

export default Red;