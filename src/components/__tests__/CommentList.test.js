import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  const initalState = {
    comments: ['Comment 1', 'Comment 2']
  };
  wrapped = mount(
    <Root initialState={initalState}>
      <CommentList />
    </Root>
  );
});

describe('comment List Tests', () => {
  it('creates one li for comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('shows text of lists', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
  });

});