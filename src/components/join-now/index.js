import React, { Component } from "react";

import Button from "../button";

import StravaLogo from "../../assets/images/strava_logo.png";
import { primaryColor, white } from "../../commons/colors";

import { STRAVA_LINK } from "../../config";
import { FormattedMessage } from "react-intl";

export default class JoinNow extends Component {
    render() {
        return (
            <a href={STRAVA_LINK}>
                <Button
                    backgroundColor={primaryColor}
                    label={<FormattedMessage id="section.join.button" />}
                    iconImage={StravaLogo}
                    textColor={white}
                />
            </a>
        );
    }
}
