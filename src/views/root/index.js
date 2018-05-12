import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { fetchReports } from "../../actions/reports";

import BackToTop from "../../components/back-to-top";
import ScrollDown from "../../components/scroll-down";

import FirstSection from "../../components/sections/first";
import FactsAndFigures from "../../components/sections/facts-and-figures";
import FeaturesSection from "../../components/sections/features";
import Footer from "../../components/sections/footer";
import Join from "../../components/sections/join";
import Header from "../../components/sections/header";
import How from "../../components/sections/how";
import Mondora from "../../components/sections/mondora";
import Standings from "../../components/sections/standings";
import Why from "../../components/sections/why";

class RootPage extends Component {
    static propTypes = {
        fetchReports: PropTypes.func.isRequired,
        reports: PropTypes.shape({
            data: PropTypes.array
        })
    };

    componentDidMount() {
        const { fetchReports } = this.props;
        if (fetchReports) {
            fetchReports();
        }
    }

    render() {
        const { reports } = this.props;
        return (
            <div>
                <Header />
                <ScrollDown />
                <FirstSection />
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

const mapStateToProps = state => {
    return {
        strava: state.strava,
        reports: state.reports
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReports: bindActionCreators(fetchReports, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);
