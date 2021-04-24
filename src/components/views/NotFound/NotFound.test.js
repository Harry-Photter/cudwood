import React from 'react';
import ReactDOM from 'react-dom';
import { NotFoundComponent} from './__pascalCase_name__';

describe('Component NotFound', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFoundComponent />, div);
  });
});