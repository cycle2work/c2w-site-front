import React, {Component} from 'react';
import MobileMenu from '../../Menu';
import '../../../index.css';
import {primaryColor, black} from '../../../commons/colors';

import logo from '../../../assets/images/logo_cycle2work.svg';

const styles = {
    mobileMenuWrp: {
        position: 'fixed',
        zIndex: 1000,
        backgroundColor: primaryColor,
        width: '100%',
        height: '55px'
    },
    logoMobileMenu: {
        margin: '10px 0 0 20px',
        height: 80,
        width: 80,
        float: 'left'
    },
    logoDesktopMenu: {
        height: 100,
        width: 100,
        float: 'left'
    },
    desktopMenuWrp: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '30px 0'
    },
    desktopMenu: {
        float: 'right',
        width: 'calc(100% - 100px)',
        lineHeight: '100px',
        textAlign: 'right'
    },
    desktopMenuLink: {
        fontSize: 'calc(14px + 0.3wv)',
        fontWeight: 500,
        color: black,
        textTransform: 'uppercase',
        padding: '0 15px'
    }
};

export default class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            menus: {
                firstSection: 'Cycle2Work',
                features: 'Features',
                howItWorks: 'How it works',
                factsAndFigures: 'Facts and figures',
                why: 'Why',
                join: 'Join',
                standings: 'Standings'
            }
        };
    }

    getItem (item) {
        return (
            <a
                href={'#'.concat(item)}
                key={item}
                style={styles.desktopMenuLink}
            >
                <span>{this.state.menus[item]}</span>
            </a>
        );
    }

    getMenu () {
        const items = [
            this.getItem('features'),
            this.getItem('howItWorks'),
            this.getItem('factsAndFigures'),
            this.getItem('why'),
            this.getItem('join'),
            this.getItem('standings')
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
                <div className='showMobile'>
                    <div style={styles.mobileMenuWrp}>
                        <img
                            alt='Logo Cycle2Work'
                            src={logo}
                            style={styles.logoMobileMenu}
                        />
                        <MobileMenu />
                    </div>
                </div>
                <div className='showDesktop'>
                    <div style={styles.desktopMenuWrp}>
                        <img
                            alt='Logo Cycle2Work'
                            src={logo}
                            style={styles.logoDesktopMenu}
                        />    
                        <div style={styles.desktopMenu}>
                            {this.getMenu()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
