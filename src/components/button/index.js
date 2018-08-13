import PropTypes from "prop-types";
import React, { Component } from "react";

import styled from "styled-components";

import { primaryColor, white } from "../../commons/colors";

const ButtonContainer = styled.div`
    background: ${props => props.backgroundColor};
    border-radius: 30px;
    color: ${props => props.textColor};
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    display: inline-block;
    padding: 12px 60px;
    text-align: center;
    font-size: calc(14px + 0.2vw);
    line-height: calc(20px + 0.2vw);
    font-weight: 500;
    box-shadow: 0px 8px 40px -9px rgba(28, 27, 41, 0.5);
    user-select: none;
    transition: box-shadow 400ms ease;

    &:hover {
        box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.15);
        opacity: 0.8;
    }
    @media screen and (max-width: 991px) {
        padding: 12px 22px;
    }
`;

const Icon = styled.img`
    max-width: 20px;
    height: 20px;
    float: right;
    margin-left: 5px;
`;

export default class Button extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        iconImage: PropTypes.string,
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
        const { backgroundColor, iconImage, label, onClick, textColor, disabled } = this.props;
        return (
            <ButtonContainer
                disabled={disabled}
                onClick={onClick}
                textColor={textColor}
                backgroundColor={backgroundColor}
            >
                {label}
                {iconImage ? <Icon src={iconImage} alt={label} /> : null}
            </ButtonContainer>
        );
    }
}
