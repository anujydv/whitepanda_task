import React from "react";
import Button from "./button";

const ServicesBox = (props) => {
    return (
        <div className="serviceBox">
            <div className="serviceName">
                <div className="serviceLogo">
                    <img src="image/filled-circle.png" alt="service-logo" width="60px" height="60px" />
                </div>
                <div className="serviceTitle">
                    <span>{props.title}</span>
                    <br />
                    from  &#8377;{props.price}
                </div>
            </div>
            <div className="serviceDetail">
                <p>
                    Typically 450-400 words,an e-book is
                    perfect for target audience ranging
                    from prospective customers to users
                </p>
            </div>
            <div className="serviceAction">
                <Button>
                    Order
                </Button>
            </div>
        </div >
    );
};

export default ServicesBox;
