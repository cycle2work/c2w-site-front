import React, {Component} from 'react';
import {Col, Menu, Row} from 'antd';

import './App.css';
import {blue} from './commons/colors';
import Button from './components/Button/index';
import FirstSection from './components/sections/first';

import logo from './assets/images/logo_cycle2work.svg';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends Component {

    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div style={{margin: 'auto', maxWidth: 1200}}>
                <Row>
                    <Col md={3} xs={24}>
                        <img alt='Logo' src={logo} style={{height: 100, width: 100}} />
                    </Col>
                    <Col md={21} xs={24}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode='horizontal'
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
                            <Menu.Item key='contacts'>
                                {'CONTACTS'}
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <FirstSection />
            </div>
        );
    }

}