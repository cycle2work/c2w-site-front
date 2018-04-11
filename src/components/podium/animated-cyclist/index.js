import React, { Component } from "react";
import PropTypes from "prop-types";

import Anime from "react-anime";

import { Row, Col } from "antd";

import cyclist from "../../../assets/images/cyclist.png";

export default class AnimatedCyclist extends Component {

    static propTypes = {
        delay: PropTypes.number,
        translateX: PropTypes.number
    };

    render() {
        const { translateX, delay } = this.props;
        return (
            <Row>
                <Col span={24}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Anime
                            easing="easeInOutElastic"
                            elasticity={10}
                            duration={2500}
                            delay={(el, index) => ++index * delay}
                            scale={[1, 1.2]}
                        >
                            <div style={{ backgroundColor: "red", width: "48px", height: "24px", borderRadius: "16px" }} />
                        </Anime>
                        <Anime
                            easing="easeInOutElastic"
                            elasticity={10}
                            duration={2500}
                            delay={(el, index) => ++index * delay}
                            translateX={`${translateX}em`}
                            scale={[1, 1.2]}
                        >
                            <img src={cyclist} alt={"Cyclist"} />
                        </Anime>
                    </div>
                </Col>
            </Row>
        );
    }
}
