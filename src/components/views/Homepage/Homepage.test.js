import React from 'react';
import ReactDOM from 'react-dom';
import { HomepageComponent} from './__pascalCase_name__';

describe('Component Homepage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomepageComponent />, div);
  });
});