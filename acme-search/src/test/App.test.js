import React from 'react';
import renderer from 'react-test-renderer';
import App from './../js/App.js';

describe('<App />', () => {

  describe('(snapshot)', () => {
    it('renders the component correctly', () => {
    const appSnapShot = renderer
      .create(<App />)
      .toJSON();
    expect(appSnapShot).toMatchSnapshot();
  });
  })
})