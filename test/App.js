import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import App from '../src/App';

describe('App', () => {

    it('renders', () => {
        const element = shallow(<App />);
        expect(element).to.have.length(1);
    });

});
