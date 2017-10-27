import React, {Component} from 'react';
import {Col, Row} from 'antd';

import './App.css';
import Menu from './components/Menu/index';
import FirstSection from './components/sections/first';
import FactsAndFigures from './components/sections/factsAndFigures';
import FeaturesSection from './components/sections/features';
import Why from './components/sections/why';

import logo from './assets/images/logo_cycle2work.svg';
import Mondora from './components/sections/mondora';

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
            <div>
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
                <FirstSection />
                <FeaturesSection />
                <FactsAndFigures />
                <Why />
                <Mondora />
            </div>
        );
    }

}