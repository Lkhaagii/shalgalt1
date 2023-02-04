import React from "react";
import "./home.css"
import Red from "../colors/red/red.jsx";
import Blue from "../colors/blue/blue.jsx";
import Green from "../colors/green/green.jsx";


const Home = () =>{
    return(
        <div className="home">
            <div className="top">
                <div className="red"> 
                
                <a href="<Red/>"><h1>READ MORE<Red/></h1></a>
                    
                </div>
                <div className="amjilt">
                <img src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/298834898_802848501095591_2469189537501300721_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t2c3P4Kqwi0AX8rDdWG&_nc_ht=scontent.fuln8-1.fna&oh=00_AfCvQR2-v_6SY-MHYBJjZb9Sd0mWYo2XlUMC_5FmftbLXA&oe=63E29014" alt="" />
                </div>
            </div>
            <div className="bottom">
                <div className="green">
                    <a href="<Green/>"><h1>READ MORE<Green/></h1></a>
                    
                </div>
                <div className="blue">
                <a href="<Blue/>"><h1>READ MORE<Blue/></h1></a>
                    
                    </div>
            </div>
        </div>
    )
}

export default Home