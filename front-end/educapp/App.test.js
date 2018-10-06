import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renderizando sem quebrar', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

//Pensar em teste primeiro