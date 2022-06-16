import React from 'react';
import StatsContainer from './../StatsContainer';
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('StatsContainer Test Case { ', ()=>{

    let store;
    let component;
    
    beforeEach(() => {
        store = mockStore({
            pending: '1' , declined: '1', interview: '1',
        });
        component = renderer.create(<Provider store={store}><StatsContainer ></StatsContainer></Provider>).toJSON();
    });

    

    it(' Snap 1 }', ()=>{
        expect(component).toMatchSnapshot();
    });
});