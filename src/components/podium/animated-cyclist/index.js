import React, { Component } from "react";
import PropTypes from "prop-types";

import Anime from "react-anime";

import cyclist from "../../../assets/images/cyclist.png";

export default class AnimatedCyclist extends Component {

    static propTypes = {
        delay: PropTypes.number,
        translateX: PropTypes.number
    };

    render() {
        const { translateX, delay } = this.props;
        return (
            <Anime
                easing="easeInOutElastic"
                elasticity={10}
                duration={2500}
                delay={(el, index) => ++index * delay}
                translateX={`${translateX}em`}
                scale={[1, 1.2]}
            >
                <div style={{ padding: "8px" }}>
                    <img src={cyclist} alt={"Cyclist"} />
                </div>
            </Anime>
        );
    }
}
