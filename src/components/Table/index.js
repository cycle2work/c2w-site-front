import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

import DownloadLink from '../../components/DownloadLink';

export default class StandingsTable extends Component {
    static propTypes = {
        data: PropTypes.array,
        tableTitle: PropTypes.string
    }

    state = {
        bordered: false,
        loading: false,
        pagination: false,
        showHeader: true,
        size: 'middle'
    }

    renderButtonDownload () {
        return (
            () => <DownloadLink label='Download CSV' filePath='https://botw-pd.s3.amazonaws.com/styles/logo-original-577x577/s3/112013/logo_strava_0.png?itok=Z7ZZWsjO' />
        );
    }

    render () {
        const columns = [
            {
                title: '',
                dataIndex: 'position',
                key: 'position'

            }, {
                title: 'Company',
                dataIndex: 'company',
                key: 'company'
            }, {
                title: 'Km/month',
                dataIndex: 'km',
                key: 'km'
            }, {
                title: 'CO2',
                dataIndex: 'co2',
                key: 'co2'
            },
            {
                title: 'Download data',
                dataIndex: 'download',
                key: 'download',
                render: this.renderButtonDownload()
            }];
        
        return <Table title={() => this.props.tableTitle} {...this.state} columns={columns} dataSource={this.props.data} />;
    }
}