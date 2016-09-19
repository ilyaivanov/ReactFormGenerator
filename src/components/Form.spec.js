import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import spies from 'chai-spies';
import MyForm from './Form';

chai.use(spies);

describe('Having a form with two options', function () {
    var options = [{name: "username", type: "text"}, {name: "password", type: "text"}];
    var node, submitSpy;
    describe('should render a form', function () {
        beforeEach(function () {
            submitSpy = chai.spy("on submit spy");
            node = shallow(<MyForm options={options} onSubmit={submitSpy}/>);
        });

        it('with two labels', function () {
            expect(node.find('label')).to.have.length(2)
        });

        it('two text inputs', function () {
            expect(node.find('input[type="text"]')).to.have.length(2)
        });

        it('one submit button', function () {
            expect(node.find('input[type="submit"]')).to.have.length(1);
        });

        it('when clicking on submit button onSubmit callback mush have been called', function () {
            node.find('input[type="submit"]').simulate('click');
            expect(submitSpy).to.have.been.called();
        });
    });


});