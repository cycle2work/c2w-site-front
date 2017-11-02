import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from 'sinon';

import Button from '../../../src/components/Button';

describe('Button', () => {

    it('renders one div element', () => {
        const element = shallow(<Button onClick={sinon.spy()} />);
        expect(element.find('div')).to.have.length(1);
    });

    it('provides backgroundColor prop to style of div element', () => {
        const element = shallow(<Button backgroundColor={'color red'} onClick={sinon.spy()} />);
        expect(element.find('div').prop('style').background).to.equal('color red');
    });

    it('renders label prop inside of div element', () => {
        const element = shallow(<Button label={'this is a label'} onClick={sinon.spy()} />);
        expect(element.find('div').text()).to.equal('this is a label');
    });

    it('calls onClick prop triggering onClick of div element', () => {
        const onClick = sinon.spy();
        const element = shallow(<Button onClick={onClick} />);
        element.find('div').simulate('click');
        expect(onClick).to.have.callCount(1);
    });

    it('provides textColor prop to style of div element', () => {
        const element = shallow(<Button textColor={'color green'} onClick={sinon.spy()} />);
        expect(element.find('div').prop('style').color).to.equal('color green');
    });

});