import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderComponent} from './__pascalCase_name__';

describe('Component Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderComponent />, div);
  });
});