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
                <p style={style.position}>
                    {position}
                </p>
                <br />
                <img alt={name} src={profile} style={style.image} />
                <br />
                <p style={style.name}>
                    {name}
                </p>
                <p style={style.co2}>
                    {`${Math.round((distance || 0) / 7140)} Co2`}
                </p>
                <p style={style.km}>
                    {`${Math.round((distance || 0) / 1000)} km`}
                </p>
            </div>
        );
    }
}
