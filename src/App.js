import React, {Component} from 'react';

import './App.css';
import BackToTop from './components/BackToTop';
import FirstSection from './components/sections/first';
import FactsAndFigures from './components/sections/factsAndFigures';
import FeaturesSection from './components/sections/features';
import Footer from './components/sections/footer';
import Header from './components/sections/header';
import Standings from './components/sections/standings';
import Why from './components/sections/why';
import How from './components/sections/how';
import Join from './components/sections/join';
import Mondora from './components/sections/mondora';


export default class App extends Component {

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
                <Header />
                <FirstSection />
                <FeaturesSection />
                <How />
                <FactsAndFigures />
                <Why />
                <Mondora />
                <Join />
                <Standings />
                <Footer />
                <BackToTop />
            </div>
        );
    }

}