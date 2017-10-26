import React, {Component} from 'react';
import {Col, Row} from 'antd';

import './App.css';
import {blue} from './commons/colors';
import Button from './components/Button/index';
import Menu from './components/Menu/index';

import logo from './assets/images/logo_cycle2work.svg';
import homeCyclist from './assets/images/home_cyclist.png';

export default class App extends Component {

    state = {
        current: 'mail'
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    render () {
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
                        />
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
                <Button label={'JOIN NOW'} onClick={() => {}} />
            </div>
        );
    }

}
