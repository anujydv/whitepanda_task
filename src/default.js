import React, { Component } from "react";
import ServiceBox from "./component/serviceBox";
import Button from "./component/button";

class Default extends Component {
    state = {
        services: [
            {
                imagePath: "",
                title: "Blog /Article",
                price: 500
            },
            {
                imagePath: "",
                title: "Newsletter /E-mailer",
                price: 1000
            },
            {
                imagePath: "",
                title: "Whitepaper",
                price: 2000
            },
            {
                imagePath: "",
                title: "e-book",
                price: 1000
            },
            {
                imagePath: "",
                title: "Report /Guide",
                price: 1000
            },
            {
                imagePath: "",
                title: "Product Description",
                price: 500
            },
            {
                imagePath: "",
                title: "Website Content",
                price: 1000
            },
            {
                imagePath: "",
                title: "Video Script",
                price: 1000
            },
            {
                imagePath: "",
                title: "Company Profile/Boucher",
                price: 2000
            },
            {
                imagePath: "",
                title: "Press Release",
                price: 2000
            },
        ]
    };
    render() {
        let services = [];
        for (const service of this.state.services) {
            services.push(<ServiceBox key={service.title} title={service.title} price={service.price} />);
        }
        return (
            <div className="mainBox">
                <div className="pageTitle">
                    <h1>Content Store</h1>
                </div>
                <div className="top">
                    <div className="pageDetail">
                        <div className="detailBox">
                            <h4>Got bulk orders or almost similar orders ? Fill the order breif in an excel sheet</h4>
                            <p>
                                If you're wondering about an easy oreder in large numbers, we provider a way customized just for that.
                                Download our excel sheet, and fill order brief in the prescribed format and submit. In case you need any help,
                                <span>we are just a click away to assist you in placeing your order</span>
                            </p>
                        </div>
                    </div>
                    <div className="pageAction">
                        <Button>Order via Excel Sheet</Button>
                    </div>
                </div>
                <div className="middle">
                    {services}
                </div>
            </div >
        );
    }
}

export default Default;