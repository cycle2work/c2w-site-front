import {Row, Col} from 'antd';
import React, {Component} from 'react';

import JoinImage from '../../../assets/images//bg_join.png';

import Card from './card';
import {style} from './style';

export default class Join extends Component {

    render () {
        return (
            <Row style={style.container}>
                <Row style={style.titleWrp}>
                    <h2 id='join' style={style.sectionTitle}>{'Join Cycle2Work to...'}</h2>
                </Row>
                <Row
                    type='flex'
                    justify='space-around'
                    style={style.row}
                >
                    <Col
                        xs={{span: 24, order: 2, pull: 4}}
                        md={{span: 12, order: 1, pull: 0}}
                        style={style.imageContainer}
                    >
                        <img
                            alt='Join Now'    
                            src={JoinImage}
                            style={style.image}
                        />
                    </Col>
                    <Col
                        xs={{span: 24, order: 1}}
                        md={{span: 12, order: 2}}
                        style={{textAlign: 'center'}}
                    >
                        <Card />
                    </Col>
                </Row>
            </Row>
        );
    }
}
