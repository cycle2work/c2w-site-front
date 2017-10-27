import PropTypes from 'prop-types';
import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import './index.css';

class MenuWrap extends Component {

    static propTypes = {
        children: PropTypes.object,
        side: PropTypes.string
    };

    constructor (props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    show () {
        this.setState({hidden: false});
    }

    render () {
        let style;
        const {children, side} = this.props;

        if (this.state.hidden) {
            style = {display: 'none'};
        }

        return (
            <div style={style} className={side}>
                {children}
            </div>
        );
    }
}

class MenuComponent extends Component {

    static propTypes = {
        menus: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            currentMenu: 'slide',
            menus: {
                firstSection: 'Cycle2Work',
                features: 'Features',
                howItWorks: 'How it works',
                factsAndFigures: 'Facts and figures',
                why: 'Why',
                contacts: 'Contacts'
            },
            side: 'right'
        };
    }

    getItem (item) {
        let href = '#' + item;
        return (
            <a
                key={item}
                href={href}
            >
                <i className='fa fa-fw fa-star-o' /><span>{this.state.menus[item]}</span>
            </a>
        );
    }

    getMenu () {
        const Menu = BurgerMenu[this.state.currentMenu];
        const items = [
            this.getItem('firstSection'),
            this.getItem('features'),
            this.getItem('howItWorks'),
            this.getItem('factsAndFigures'),
            this.getItem('why'),
            this.getItem('contacts')
        ];

        return (
            <MenuWrap side={this.state.side}>
                <Menu
                    id={this.state.currentMenu}
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}
                    right={true}
                    width={'280px'}
                >
                    {items}
                </Menu>
            </MenuWrap>
        );
    }

    render () {
        return (
            <div id='outer-container'>
                {this.getMenu()}
            </div>
        );
    }
}

export default MenuComponent;

