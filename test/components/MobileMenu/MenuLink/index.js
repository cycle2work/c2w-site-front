import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import * as sinon from 'sinon';

import MenuLink from '../../../../src/components/MobileMenu/MenuLink';

describe('MenuLink', () => {

    it('renders one a element', () => {
        const element = shallow(<MenuLink onClick={sinon.spy()} />);
        expect(element.find('a')).to.have.length(1);
    });

    it('renders label prop as a child of a element', () => {
        const element = shallow(<MenuLink label={'this is a label'} onClick={sinon.spy()} />);
        expect(element.find('a').text()).to.equal('this is a label');
    });

    it('provides url prop concatenating with \'#\' to href of a element', () => {
        const element = shallow(<MenuLink onClick={sinon.spy()} url={'this is an url'} />);
        expect(element.find('a').prop('href')).to.equal('#this is an url');
    });

    it('calls onClick prop clicking on a element', () => {
        const onClick = sinon.spy();
        const element = shallow(<MenuLink onClick={onClick} />);
        element.find('a').simulate('click');
        expect(onClick).to.have.callCount(1);
    });

});