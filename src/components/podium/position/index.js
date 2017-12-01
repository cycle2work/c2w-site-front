import React, { Component } from "react";
import PropTypes from "prop-types";

import { style } from "./style";

export default class Position extends Component {

    static propTypes = {
        company: PropTypes.shape({
            distance: PropTypes.number,
            name: PropTypes.string,
            profile: PropTypes.profile
        }),
        position: PropTypes.string
    };

    render() {
        const { company: { name, distance, profile }, position } = this.props;
        return (
            <div>
                <p>{position}</p>
                <br />
                <img alt={name} src={profile} style={style.image} />
                <br />
                <p>{name}</p>
                <p>{`${Math.round((distance || 0) / 1000)} km`}</p>
            </div>
        );
    }
}
