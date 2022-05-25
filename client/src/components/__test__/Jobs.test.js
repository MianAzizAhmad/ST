import React from 'react';
import Job from './../Job';
import "@testing-library/jest-dom/extend-expect"
// import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { renderHook, act } from '@testing-library/react-hooks/dom'

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
        status="Offered" onClick={fn}></Job>);
        const btn = component.root.findByType('button');
        act(btn.props.onClick);
        // act(() => {
        //     fireEvent.click(btn.props);
        //   });
        // Verify callback is invoked
        console.log(fn.mock.calls.length);
        // expect(fn.mock.calls.length).toBe(1);
        expect(component.root.getElementbyId('type').value).toBe("Clerk");
    });
});