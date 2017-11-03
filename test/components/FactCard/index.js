import {Col} from 'antd';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import FactCard from '../../../src/components/FactCard';

describe('FactCard', () => {

    it('renders one Col component', () => {
        const element = shallow(<FactCard />);
        expect(element.find(Col)).to.have.length(1);
    });

    it('renders one img element', () => {
        const element = shallow(<FactCard />);
        expect(element.find('img')).to.have.length(1);
    });

    it('renders three div elements', () => {
        const element = shallow(<FactCard />);
        expect(element.find('div')).to.have.length(3);
    });

    it('provides icon prop to src of img element', () => {
        const element = shallow(<FactCard icon={'this is an icon'} />);
        expect(element.find('img').prop('src')).to.equal('this is an icon');
    });

    it('provides lg prop to lg of Col element', () => {
        const element = shallow(<FactCard lg={123} />);
        expect(element.find(Col).prop('lg')).to.equal(123);
    });

    it('provides md prop to md of Col element', () => {
        const element = shallow(<FactCard md={234} />);
        expect(element.find(Col).prop('md')).to.equal(234);
    });

    it('renders text prop as a child of third div element', () => {
        const element = shallow(<FactCard text={'this is a text'} />);
        expect(element.find('div').at(2).text()).to.equal('this is a text');
    });

    it('renders title prop as a child of second div element', () => {
        const element = shallow(<FactCard title={'this is a title'} />);
        expect(element.find('div').at(1).text()).to.equal('this is a title');
    });

    it('provides xs prop to xs of Col element', () => {
        const element = shallow(<FactCard xs={345} />);
        expect(element.find(Col).prop('xs')).to.equal(345);
    });

});