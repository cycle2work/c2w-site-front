import PropTypes from "prop-types";
import React, { Component } from "react";

import styled from "styled-components";

import { primaryColor, white } from "../../commons/colors";

const ButtonContainer = styled.div`
    background: ${props => props.backgroundColor};
    border-radius: 30px;
    color: ${props => props.textColor};
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    line-height: 45px;
    display: inline-block;
    padding: 0 60px;
    text-align: center;
    font-size: calc(14px + 0.2vw);
    font-weight: 500;
    text-style: uppercase;
    boxshadow: 0px 8px 40px -9px rgba(28, 27, 41, 0.5);
    user-select: none;
`;

export default class Button extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        label: PropTypes.string,
        onClick: PropTypes.func,
        textColor: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        backgroundColor: primaryColor,
        label: "",
        textColor: white
    };

    render() {
        const { backgroundColor, label, onClick, textColor, disabled } = this.props;
        return (
            <ButtonContainer
                disabled={disabled}
                onClick={onClick}
                textColor={textColor}
                backgroundColor={backgroundColor}
            >
                {label}
            </ButtonContainer>
        );
    }
}
