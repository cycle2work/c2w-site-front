import React, { Component } from "react";

import Button from "../button";

import StravaLogo from "../../assets/images/strava_icon.png";
import { primaryColor, white } from "../../commons/colors";

import { STRAVA_LINK } from "../../config";

export default class JoinNow extends Component {
    render() {
        return (
            <a href={STRAVA_LINK}>
                <Button
                    backgroundColor={primaryColor}
                    label={"JOIN with STRAVA"}
                    iconImage={StravaLogo}
                    textColor={white}
                />
            </a>
        );
    }
}
