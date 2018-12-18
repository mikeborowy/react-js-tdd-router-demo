import React from 'react';
import {Route, MemoryRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import Root from 'store';
import CommentBox from 'components/CommentBox';

let component;

beforeEach( () => {
    const initialState = {
        auth: true 
    }
    component = mount(
        <Root initialState={initialState}>
            <MemoryRouter initialEntries={['/post']}>
                <CommentBox/>
            </MemoryRouter>
        </Root>
    );
});

afterEach( () => {
    component.unmount();
});

it('has text area and button', () => {
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(2);
});


describe('has text area an button', () => {
    
    beforeEach(() => {
        //simulate event
        component.find('textarea').simulate('change', {
            target: {
                value: 'new comment'
            }
        });
        //force component update
        component.update();
    });

    it('has textare that user can type in', () => {
        //assign passed value to compponent property
        expect(component.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('clears out data from text area after submit', () => {
        //simulate submit event
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');
    });
});

/**
 * Order of tests:
 * 1. beforeEach 1 -> 'has text area and button' -> afterEach 1
 * 2. beforeEach 1 -> beforeEach 2 -> 'has textare that user can type in' -> afterEach 1
 * 3. beforeEach 1 -> beforeEach 2 -> 'clears out data from text area after submit' -> afterEach 1
 */