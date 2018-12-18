import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {shallow, mount} from 'enzyme';
import Root from 'store';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let component;

beforeEach( () => {
   const initialState = {
         auth: true 
   }
    component = shallow(
      <Root initialState={initialState}>
         <MemoryRouter initialEntries={[ '/', '/post' ]}>
            <App/>
         </MemoryRouter>
      </Root>
    );
});

it('shows comment box', () => {
   expect(component.find(CommentBox).length).toEqual(0);
});

it('shows comment list', () => {
   expect(component.find(CommentList).length).toEqual(0);
});