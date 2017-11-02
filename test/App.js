import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import App from '../src/App';
import store from '../src/store';


describe('App', () => {

    it('renders', () => {
        const element = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(element).to.have.length(1);
    });

});
