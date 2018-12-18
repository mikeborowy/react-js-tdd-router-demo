import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import Root from 'store';
import CommentList from 'components/CommentList';

let component;

beforeEach( () => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
    component = mount(
        <Root initialState={initialState}>
         <MemoryRouter initialEntries={[ '/' ]}>
            <CommentList />
         </MemoryRouter>
        </Root>
    );
});

afterEach( () => {
    component.unmount();
});

it('creates one LI per comment', () => {
    expect(component.find('li').length).not.toBeLessThan(0);
})

it('shows text for each comment', () => {
    expect(component.render().text()).toContain('Comment 1');
    expect(component.render().text()).toContain('Comment 2');
})