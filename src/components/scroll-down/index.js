import { Icon } from "antd";
import React, { Component } from "react";
import { animateScroll } from "react-scroll";

import { primaryColorLighter } from "../../commons/colors";
import "./style.css";

const styles = {
    container: {
        width: "100%",
        position: "relative"
    },
    button: {
        cursor: "pointer",
        fontSize: 60,
        margin: "0px auto",
        textAlign: "center",
        color: primaryColorLighter,
        position: "absolute",
        zIndex: "100",
        left: "calc(50% - 30px)",
        borderRadius: "50%"
    }
};

export default class ScrollDown extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div onClick={() => animateScroll.scrollTo(1000)} className={"buttonScrollWrp"}>
                    <Icon style={styles.button} type="down-circle" className="buttonScrollEffect" />
                </div>
            </div>
        );
    }
}
