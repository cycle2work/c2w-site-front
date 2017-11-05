import PropTypes from "prop-types";
import React, {Component} from "react";

import {primaryColor, white} from "../../commons/colors";

export default class Button extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        label: PropTypes.string,
        onClick: PropTypes.func,
        textColor: PropTypes.string
    }

    static defaultProps = {
        backgroundColor: primaryColor,
        label: "",
        textColor: white
    }

    render () {
        const {backgroundColor, label, onClick, textColor} = this.props;
        return (
            <div
                onClick={onClick}
                style={{
                    background: backgroundColor,
                    borderRadius: 30,
                    color: textColor,
                    cursor: "pointer",
                    lineHeight: "45px",
                    display: "inline-block",
                    padding: "0px 60px",
                    textAlign: "center",
                    fontSize: "calc(14px + 0.2vw)",
                    fontWeight: 500,
                    textStyle: "uppercase",
                    WebkitBoxShadow: "0px 8px 40px -9px rgba(28, 27, 41, 0.5)",
                    MozBoxShadow: "0px 8px 40px -9px rgba(28, 27, 41, 0.5)",
                    boxShadow: "0px 8px 40px -9px rgba(28, 27, 41, 0.5)"
                }}
            >
                {label}
            </div>
        );
    }

}
