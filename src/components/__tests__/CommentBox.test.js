import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>);
});

afterEach(() => {
  wrapped.unmount();
}

);

it('has a text area ', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
}
);

describe('the text area and button', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new Comment' }
    });
    wrapped.update();
  });

  it('has text area that user can type in ', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new Comment');
  })

  it('form Submitted text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  })

});