import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Animated = styled.div`
    opacity: ${props => (props.started ? "1" : "0")};
    transform: translateY(${props => (props.started ? "0" : "32")}px);
    transition: transform 300ms ease ${props => props.delay}ms,
        opacity 500ms ease ${props => props.delay}ms;
`;

export default class AnimatedContainer extends Component {
    static propTypes = {
        children: PropTypes.node,
        delay: PropTypes.number
    };

    static defaultProps = {
        delay: 0
    };

    constructor(props) {
        super(props);
        this.state = { started: false };
    }

    componentDidUpdate() {
        const { started } = this.state;
        if (!started) {
            setTimeout(() => {
                this.setState({ started: true });
            }, 50);
        }
    }

    render() {
        const { children, delay } = this.props;
        const { started } = this.state;
        return (
            <Animated started={started} delay={delay}>
                {children}
            </Animated>
        );
    }
}
