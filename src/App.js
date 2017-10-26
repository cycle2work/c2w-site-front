import React, {Component} from 'react';
import {Col, Menu, Row} from 'antd';

import './App.css';
import {blue} from './commons/colors';
import Button from './components/Button/index';

import logo from './assets/images/logo_cycle2work.svg';
import homeCyclist from './assets/images/home_cyclist.png';

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
                <Row>
                    <img
                        alt='home_cycling'
                        src={homeCyclist}
                        style={{
                            position: 'fixed',
                            right: 0,
                            width: 800
                        }}
                    />
                    <h1>{'Cycle2Work'}</h1>
                    <h2 style={{color: blue}}>{'For a helthier, happier world'}</h2>
                    <div
                        style={{
                            marginBottom: 60,
                            marginTop: 60
                        }}
                    >
                        <div>{'Want to improve your health and your planet?'}</div>
                        <div>{'Cycle2Work is here to help! Simply create a'}</div>
                        <div>{'company team on Strava, connect to'}</div>
                        <div>{'Cycle2Work and start reducing your carbon'}</div>
                        <div>{'footprint today.'}</div>
                    </div>
                </Row>
                <Button label={'JOIN NOW'} onClick={() => {}}/>
            </div>
        );
    }

}