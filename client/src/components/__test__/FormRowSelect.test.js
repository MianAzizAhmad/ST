import React from 'react';
import FormRowSelect from './../FormRowSelect';
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer';

describe('Test Case { ', ()=>{

    it('FormRowSelect Snap 1 }', ()=>{
        const objects = [{itemValue : "Value1", index : "1"}, {itemValue : "Value2", index : "2"}, {itemValue : "Value3", index : "3"}]
        const tree = renderer.create(<FormRowSelect name="name 1" value="test 1" handleChange="No change" labelText="Label1" list={objects} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('FormRowSelect Snap 2 }', ()=>{
        const tree = renderer.create(<FormRowSelect ></FormRowSelect>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('FormRowSelect Snap 3 }', ()=>{
        const objects = [{itemValue : "", index : "1"}, {itemValue : "Value2", index : ""}, {itemValue : "Value3", index : "3"}]
        const tree = renderer.create(<FormRowSelect name="snap3" value="SNAP 3" handleChange="Change" labelText="Password" list={objects}></FormRowSelect>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});