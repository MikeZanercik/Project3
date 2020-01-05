import React from "react";
import "./fields.css";
import FieldImage from "./Images/fieldImage.png";


function FieldImg() {
    return (
        <div className="row">
            <img src={FieldImage} alt="fieldImage" id="fields" />
        </div>
    )
}

export default FieldImg;