import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import MyForm from './Form';


describe('sample', function () {
    it('should pass', function () {
        const wrapper = shallow(<MyForm />);
        const actual = wrapper.find('h3').text();
        const expected = 'Form';

        expect(actual).to.equal(expected);
    });

});