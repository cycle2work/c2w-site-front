import React, {Component} from "react";
import MobileMenu from "../../MobileMenu";
import "../../../index.css";
import {primaryColor, black} from "../../../commons/colors";

import logo from "../../../assets/images/logo_cycle2work.svg";
import "./style.css";

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
    constructor (props) {
        super(props);
        this.state = {
            classFixed: "",
            menus: {
                firstSection: "Cycle2Work",
                features: "Features",
                howItWorks: "How it works",
                factsAndFigures: "Facts and figures",
                why: "Why",
                join: "Join",
                standings: "Standings"
            }
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount () {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll () {
        /* Trucco per farlo funzionare anche su IE */
        const topMultibrowser = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
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

    getItem (item) {
        return (
            <a
                href={"#".concat(item)}
                key={item}
                className="desktopMenuLink"
            >
                <span>{this.state.menus[item]}</span>
            </a>
        );
    }

    getMenu () {
        const items = [
            this.getItem("features"),
            this.getItem("howItWorks"),
            this.getItem("factsAndFigures"),
            this.getItem("why"),
            this.getItem("join"),
            this.getItem("standings")
        ];

        return (
            <div>
                {items}
            </div>
        );
    }
    
    render () {
        return (
            <div>
                <div className="showMobile">
                    <div style={styles.mobileMenuWrp}>
                        <img
                            alt="Logo Cycle2Work"
                            src={logo}
                            style={styles.logoMobileMenu}
                        />
                        <MobileMenu
                            links={[
                                {label: "Cycle2Work", url: "firstSection"},
                                {label: "Features", url: "features"},
                                {label: "How it works", url: "howItWorks"},
                                {label: "Facts and figures", url: "factsAndFigures"},
                                {label: "Why", url: "why"},
                                {label: "Join", url: "join"},
                                {label: "Standings", url: "standings"}
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
