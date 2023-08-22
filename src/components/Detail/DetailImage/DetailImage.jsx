import React from "react";


const DetailImage = (props) => {
    return (
        <div className="con-content1">
            <div className="con-content1-left">
                <img className="img1" src={props.img1} alt="" />
            </div>
            <div className="con-content1-right">
                <img className="img2" src={props.img2} alt="" />
                <img className="img3" src={props.img3} alt="" />
            </div>
        </div>
    )
}

export default DetailImage