import React from "react";
import "./home.css"
import Red1 from "../colors/Colors2/red1.jsx";
import Blue from "../colors/Colors2/blue.jsx";
import Green from "../colors/Colors2/green.jsx";


const Home = () =>{
    return(
        <div className="home">

            <div className="top">

                <div className="red"> 
                <Red1/>
                </div>

                <div className="amjilt">
                <img src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/298834898_802848501095591_2469189537501300721_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t2c3P4Kqwi0AX8rDdWG&_nc_ht=scontent.fuln8-1.fna&oh=00_AfCvQR2-v_6SY-MHYBJjZb9Sd0mWYo2XlUMC_5FmftbLXA&oe=63E29014" alt="" />
                </div>

            </div>

            <div className="bottom">

                <div className="green">
                <Green/>
                </div>

                <div className="blue">
                <Blue/>
                </div>

            </div>
            
        </div>
    )
}

export default Home