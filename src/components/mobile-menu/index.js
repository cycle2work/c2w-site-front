import PropTypes from "prop-types";
import React, {Component} from "react";
import {slide as SlideMenu} from "react-burger-menu";

import "./index.css";
import MenuLink from "./menu-link";

export default class MobileMenu extends Component {

    constructor (props) {
        super(props);
        this.state = {isOpen: false};
    }

    static propTypes = {
        links: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            url: PropTypes.string
        }))
    }

    static defaultProps = {
        links: []
    }

    render () {
        const {links} = this.props;

        return (
            <div id="outer-container">
                <div className={"right"}>
                    <SlideMenu
                        id={"slide"}
                        pageWrapId={"page-wrap"}
                        outerContainerId={"outer-container"}
                        right={false}
                        width={"18.5em"}
                        isOpen={this.state.isOpen}
                    >
                        {links.map((link) => (
                            <MenuLink
                                label={link.label}
                                key={link.label}
                                onClick={() => this.setState({isOpen: false})}
                                url={link.url}
                            />
                        ))}
                    </SlideMenu>
                </div>
            </div>
        );
    }
}
