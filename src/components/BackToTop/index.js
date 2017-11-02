import {BackTop, Icon} from 'antd';
import React, {Component} from 'react';

import {grey} from '../../commons/colors';

export default class BackToTop extends Component {

    render () {
        return (
            <BackTop visibilityHeight={1200}>
                <Icon
                    style={{
                        fontSize: 60,
                        color: grey,
                        position: 'fixed',
                        right: '20px',
                        borderRadius: '50%',
                        boxShadow: '0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)',
                        bottom: '40px'
                    }}
                    type='up-circle'
                />
            </BackTop>
        );
    }

}
