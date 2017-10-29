import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import './index.css';

class MenuComponent extends Component {

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
                join: 'Join',
                contacts: 'Contacts'
            },
            side: 'right'
        };
    }

    getItem (item) {
        return (
            <a
                key={item}
                href={'#'.concat(item)}
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
            this.getItem('join'),
            this.getItem('contacts')
        ];

        return (
            <div className={this.state.side}>
                <Menu
                    id={this.state.currentMenu}
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}
                    right={true}
                    width={'17.5em'}
                >
                    {items}
                </Menu>
            </div>
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
