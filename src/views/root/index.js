import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import { setRegistration } from '../../actions/register';
import { fetchReports } from '../../actions/reports';

import BackToTop from '../../components/BackToTop';
import FirstSection from '../../components/sections/first';
import FactsAndFigures from '../../components/sections/factsAndFigures';
import FeaturesSection from '../../components/sections/features';
import Footer from '../../components/sections/footer';
import Join from '../../components/sections/join';
import Header from '../../components/sections/header';
import How from '../../components/sections/how';
import Mondora from '../../components/sections/mondora';
import ScrollDown from '../../components/ScrollDown';
import Standings from '../../components/sections/standings';
import Why from '../../components/sections/why';

class RootPage extends Component {

    static propTypes = {
        fetchReports: PropTypes.func.isRequired,
        reports: PropTypes.shape({
            data: PropTypes.array
        }),
        setRegistration: PropTypes.func
    };

    constructor (props) {
        super(props);
        this.state = {
            current: 'mail'
        };
    }

    componentDidMount() {
        const { fetchReports } = this.props;
        if (fetchReports) {
            fetchReports();
        }
    }

    handleClick (e) {
        this.setState({
            current: e.key
        });
    };

    render() {
        const { reports } = this.props;
        return (
            <div>
                <Header />
                <ScrollDown />
                <FirstSection setRegistration={this.props.setRegistration} />
                <FeaturesSection />
                <How />
                <FactsAndFigures />
                <Why />
                <Mondora />
                <Join />
                <Standings reports={reports} />
                <Footer />
                <BackToTop />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registration: state.registration,
        reports: state.reports
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReports: bindActionCreators(fetchReports, dispatch),
        setRegistration: bindActionCreators(setRegistration, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);
