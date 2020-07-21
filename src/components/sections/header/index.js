import React, { Component } from "react";
import MobileMenu from "../../mobile-menu";
import "../../../index.css";
import { primaryColor, black } from "../../../commons/colors";

import logo from "../../../assets/images/logo_cycle2work.svg";
import "./style.css";
import { FormattedMessage } from "react-intl";

const styles = {
    mobileMenuWrp: {
        position: "fixed",
        zIndex: 1000,
        backgroundColor: primaryColor,
        width: "100%",
        height: "55px"
    },
    logoMobileMenu: {
        margin: "10px 0 0 20px",
        height: 80,
        width: 80,
        float: "left"
    },
    logoDesktopMenu: {
        float: "left",
        marginLeft: 15
    },
    desktopMenuWrp: {
        maxWidth: 1200,
        margin: "0 auto"
    },
    desktopMenu: {
        float: "right",
        width: "calc(100% - 115px)",
        textAlign: "right"
    },
    desktopMenuLink: {
        fontSize: "14px",
        fontWeight: 500,
        color: black,
        textTransform: "uppercase",
        padding: "0 15px"
    }
};

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classFixed: "",
            menus: {
                firstSection: "Cycle2Work",
                features: <FormattedMessage id="toolbar.features" />,
                howItWorks: <FormattedMessage id="toolbar.howItWorks" />,
                factsAndFigures: <FormattedMessage id="toolbar.factsAndFigures" />,
                why: <FormattedMessage id="toolbar.why" />,
                join: <FormattedMessage id="toolbar.join" />,
                standings: <FormattedMessage id="toolbar.standings" />
            }
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        /* Trucco per farlo funzionare anche su IE */
        const topMultibrowser =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (topMultibrowser > 140) {
            this.setState({
                classFixed: "fixed"
            });
        } else {
            this.setState({
                classFixed: ""
            });
        }
    }

    getItem(item) {
        return (
            <a href={"#".concat(item)} key={item} className="desktopMenuLink">
                <span>{this.state.menus[item]}</span>
            </a>
        );
    }

    getMenu() {
        const items = [
            this.getItem("features"),
            this.getItem("howItWorks"),
            this.getItem("factsAndFigures"),
            this.getItem("why"),
            this.getItem("join"),
            this.getItem("standings")
        ];

        return <div>{items}</div>;
    }

    render() {
        return (
            <div>
                <div className="showMobile">
                    <div style={styles.mobileMenuWrp}>
                        <img alt="Logo Cycle2Work" src={logo} style={styles.logoMobileMenu} />
                        <MobileMenu
                            links={[
                                { label: "Cycle2Work", url: "firstSection" },
                                {
                                    label: <FormattedMessage id="toolbar.features" />,
                                    url: "features"
                                },
                                {
                                    label: <FormattedMessage id="toolbar.howItWorks" />,
                                    url: "howItWorks"
                                },
                                {
                                    label: <FormattedMessage id="toolbar.factsAndFigures" />,
                                    url: "factsAndFigures"
                                },
                                { label: <FormattedMessage id="toolbar.why" />, url: "why" },
                                { label: <FormattedMessage id="toolbar.join" />, url: "join" },
                                {
                                    label: <FormattedMessage id="toolbar.standings" />,
                                    url: "standings"
                                }
                            ]}
                        />
                    </div>
                </div>
                <div className="showDesktop">
                    <div className={`customMenuRow ${this.state.classFixed}`}>
                        <div
                            style={{
                                ...styles.desktopMenuWrp,
                                padding: this.state.classFixed ? 0 : "30px 0",
                                height: this.state.classFixed ? 60 : 160
                            }}
                        >
                            <img
                                alt="Logo Cycle2Work"
                                src={logo}
                                style={{
                                    ...styles.logoDesktopMenu,
                                    height: !this.state.classFixed ? 100 : 60,
                                    width: !this.state.classFixed ? 100 : 60
                                }}
                            />
                            <div
                                style={{
                                    ...styles.desktopMenu,
                                    lineHeight: !this.state.classFixed ? "100px" : "60px"
                                }}
                            >
                                {this.getMenu()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
