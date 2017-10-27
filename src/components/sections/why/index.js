import {Row} from 'antd';
import React, {Component} from 'react';

import Workers from '../../../assets/images/icons/icon_workers.svg';
import Community from '../../../assets/images/icons/icon_community.svg';
import Leaf from '../../../assets/images/icons/icon_leaf.svg';

import Card from './card';
import {black, grey, white} from '../../../commons/colors';

const styles = {
    headerCardStyle: {
        align: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 800
    },
    boxCardStyle: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        paddingBottom: 30
    },
    rowStyle: {
        textAlign: 'center',
        paddingBottom: 30
    },
    containerStyle: {
        background: white,
        marginTop: '20px',
        maxWidth: 1800
    }
};

export default class Why extends Component {

    render () {
        return (
            <Row style={styles.containerStyle}>
                <Row
                    style={styles.rowStyle}
                    type={'flex'}
                    justify={'space-around'}
                >
                    <div style={styles.headerCardStyle}>
                        <p
                            style={{
                                fontSize: 40,
                                fontWeight: 'bold',
                                color: black
                            }}
                        >
                            {'Why'}
                        </p>
                        <p
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                color: grey
                            }}
                        >
                            {
                                `Cycle2Work was created by the mondora team as a way
                                    of rewarding workers who choose to commute by bicycle.
                                    We are creating positive impact for:`
                            }
                        </p>
                    </div>
                </Row>
                <Row
                    gutter={48}
                    style={styles.rowStyle}
                    type={'flex'}
                    justify={'center'}
                >
                    <Card
                        icon={Workers}
                        style={styles.boxCardStyle}
                        text={
                            `various studies claim cycling reduces stress levels
                            and the risk of certain diseases, thus improving overall
                            health and wellbeing for employees`
                        }
                        title={'Workers'}
                    />
                    <Card
                        icon={Leaf}
                        style={styles.boxCardStyle}
                        text={
                            `cycling is an eco-friendly means of travel and reduces
                            the carbon footprint of commuting to work, as well as
                            reducing traffic congestion`
                        }
                        title={'Environment'}
                    />
                    <Card
                        icon={Community}
                        style={styles.boxCardStyle}
                        text={
                            `local bycicle shops see a rise in sales as more colleagues
                            joins the programme. Earned travel reimbursements are
                                paid out as gift cards for use in bycicle shops`
                        }
                        title={'Local community'}
                    />
                </Row>
            </Row>
        );
    }

}
