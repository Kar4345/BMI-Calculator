import React from "react";
import '../styles/card.css'
function Card({info,deleteItem,index}){
    
    return (
        <div className="holder">
            <div className="close" onClick={()=>{
                deleteItem(index)
            }}>X</div>
            <div>
                <div>BMI: {info.Bmi}</div>
                <div>Date: {info.Date}</div>
            </div>
        </div>
    )
}

export default Card;