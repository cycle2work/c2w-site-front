import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Menu} from 'antd';

export default class Button extends Component {

    static propTypes = {
        mode: PropTypes.string,
        onClick: PropTypes.func,
        selectedKeys: PropTypes.array
    }

    render () {
        const {mode, onClick, selectedKeys} = this.props;
        return (
            <Menu
                onClick={onClick}
                selectedKeys={selectedKeys}
                mode={mode}
            >
                <Menu.Item key='features'>
                    {'FEATURES'}
                </Menu.Item>
                <Menu.Item key='how_it_works'>
                    {'HOW IT WORKS'}
                </Menu.Item>
                <Menu.Item key='facts_and_figures'>
                    {'FACTS AND FIGURES'}
                </Menu.Item>
                <Menu.Item key='why'>
                    {'WHY'}
                </Menu.Item>
                <Menu.Item key='join'>
                    {'JOIN'}
                </Menu.Item>
                <Menu.Item key='standings'>
                    {'STANDINGS'}
                </Menu.Item>
            </Menu>

        );
    }

}
