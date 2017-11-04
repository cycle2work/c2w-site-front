import React, {Component} from "react";
import {black, primaryColor, grey} from "../../../commons/colors";

import PropTypes from "prop-types";
import "./style.css";

export default class Card extends Component {

    static propTypes = {
        number: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        title: PropTypes.string
    }

    render () {
        const {number, style, text, title} = this.props;
        return (
            <div
                style={style}
            >
                <div
                    className="cardNumber"    
                    style={{
                        color: primaryColor,
                        width: "100%"
                    }}
                >
                    {number}
                </div>
                <div
                    className="cardTitle"    
                    style={{
                        lineHeight: "calc(20px + 0.2vw)",
                        fontSize: "calc(20px + 0.2vw)",
                        fontWeight: 500,
                        color: black,
                        width: "100%"
                    }}
                >
                    {title}
                </div>
                <div
                    className="cardText"    
                    style={{
                        lineHeight: "calc(18px + 0.2vw)",
                        fontSize: "calc(12px + 0.2vw)",
                        padding: "20px 0",
                        color: grey,
                        width: "100%"
                    }}
                >
                    {text}
                </div>
            </div>
        );
    }

}
