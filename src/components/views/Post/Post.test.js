import React from 'react';
import ReactDOM from 'react-dom';
import { PostComponent} from './__pascalCase_name__';

describe('Component Post', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostComponent />, div);
  });
});