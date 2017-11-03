import {Icon} from 'antd';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {black, white} from '../../commons/colors';
import './style.css';

export default class DownloadLink extends Component {

    static propTypes = {
        filePath: PropTypes.string,
        label: PropTypes.string,
        textColor: PropTypes.string
    }

    static defaultProps = {
        filePath: '',
        label: '',
        textColor: black
    }

    constructor(props) {
        super(props);
        this.state = {
            logged: false
        };
    }

    render () {
        const {filePath, label, textColor} = this.props;
        return (
            <a
                href={filePath}
                download={true}
                style={{
                    cursor: 'pointer',
                    fontSize: 'calc(10px + 0.2vw)',
                    lineHeight: '35px',
                    display: 'inline-block',
                    color: textColor
                }}
            >    
                <Icon
                    className='bgIcon'
                    type='cloud-download'    
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 5,
                        borderRadius: '30px',
                        lineHeight: '30px',
                        color: white,
                        fontSize: 16
                    }}
                />    
                {label}
            </a>
        );
    }

}
