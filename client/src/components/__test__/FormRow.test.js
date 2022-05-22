import React from 'react';
import ReactDom from 'react-dom';
import FormRow from './../FormRow';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer';

describe('Test Case { ', ()=>{

    it('FormRow Snap 1 }', ()=>{
        const tree = renderer.create(<FormRow type="text" name="name" value="test" handleChange="No change" labelText="testlabel"></FormRow>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('FormRow Snap 2 }', ()=>{
        const tree = renderer.create(<FormRow ></FormRow>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('FormRow Snap 3 }', ()=>{
        const tree = renderer.create(<FormRow type="password" name="snap3" value="SNAP" handleChange="Change" labelText="Password"></FormRow>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});