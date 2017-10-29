import React, {Component} from 'react';
import {Col, Row} from 'antd';
import Radium from 'radium';

import './App.css';
import MenuComponent from './components/Menu';
import FirstSection from './components/sections/first';
import FactsAndFigures from './components/sections/factsAndFigures';
import FeaturesSection from './components/sections/features';
import Footer from './components/sections/footer';
import Why from './components/sections/why';
import How from './components/sections/how';
import Join from './components/sections/join';

import logo from './assets/images/logo_cycle2work.svg';
import Mondora from './components/sections/mondora';


class App extends Component {

    state = {
        current: 'mail'
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    };

    render () {
        return (
            <div>
                <MenuComponent />
                <Row>
                    <Col md={3} xs={24}>
                        <img alt='Logo' src={logo} style={{height: 100, width: 100}} />
                    </Col>
                </Row>
                <FirstSection />
                <FeaturesSection />
                <How />
                <FactsAndFigures />
                <Why />
                <Mondora />
                <Join />
                <Footer />
            </div>
        );
    }

}

export default Radium(App);
