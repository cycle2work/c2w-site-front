import {Icon} from "antd";
import React, {Component} from "react";

import JoinNow from "../../join-now";

import {style} from "./style";
import "./style.css";

export default class Card extends Component {

    render () {
        return (
            <div style={style.box} className="cardJoin">
                <div style={{position: "relative"}}>
                    <Icon
                        style={style.icon}
                        type="check-circle-o"
                    />
                    <p style={style.paragraph}>
                        {"Take care of the environment"}
                    </p>
                </div>
                <div style={{position: "relative"}}>
                    <Icon
                        style={style.icon}
                        type="check-circle-o"
                    />
                    <p style={style.paragraph}>
                        {"Improve the wellbeing of"}
                        <br />
                        {"Workers"}
                    </p>
                </div>
                <div style={{position: "relative"}}>
                    <Icon
                        style={style.icon}
                        type="check-circle-o"
                    />
                    <p style={style.paragraph}>
                        {"Encourage exercise"}
                    </p>
                </div>
                <div style={{position: "relative"}}>
                    <Icon
                        style={style.icon}
                        type="check-circle-o"
                    />
                    <p style={style.paragraph}>
                        {"Reduce the company's carbon footprint"}
                    </p>
                </div>
                <div style={style.button}>
                    <JoinNow />
                </div>
            </div>
        );
    }

}
