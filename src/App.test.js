import React from 'react';

//import testing methods
import { render } from '@testing-library/react'; 

//import component being tested
import App from './App'; 

test('App renders without crashing', () => {
  render(<App />);
})