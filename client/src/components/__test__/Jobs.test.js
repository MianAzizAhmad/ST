import React from 'react';
import Job from './../Job';
import "@testing-library/jest-dom/extend-expect"
import { fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Jobs Test Case { ', ()=>{

    const fn = jest.fn();

    it(' Snap 1 }', ()=>{
        const component = renderer.create(<Job _id="1"
        position="Fresh" 
        company="Confiz"
        jobLocation="Gulberg"
        job="Associate Developer"
        createdAt="HR"
        status="Offered"></Job>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it(' Snap 2 }', ()=>{
      
        const component = renderer.create(<Job _id="1"
        position="Fresh" 
        company="Confiz"
        jobLocation="Gulberg"
        job="Associate Developer"
        createdAt="HR"
        status="Offered" onClick={fn}></Job>).toJSON();
        const button = tree.root.getElementbyId('edit');
        button.props.onClick()
        // Verify callback is invoked
        expect(fn.mock.calls.length).toBe(1);
        expect(tree.root.getElementbyId('type').value).toBe("Clerk");
    });
});