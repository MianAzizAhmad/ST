import React from 'react';
import StatsItem from './../StatItem';
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer';

describe('StateItem Test Case { ', ()=>{

    it(' Snap 1 }', ()=>{
        
        const tree = renderer.create(<StatsItem count="3" title="Snap 1" icon="Snap" color="white" bcg="dark"/>).toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it(' Snap 2 }', ()=>{
        const tree = renderer.create(<StatsItem ></StatsItem>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' Snap 3 }', ()=>{
        
        const tree = renderer.create(<StatsItem count="0" title="Snap 3" icon="Snap" color="dark" bcg="white"></StatsItem>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});