import React from 'react';
import ReactDOM from 'react-dom';
import { {{pascalCase name}}Component} from './__pascalCase_name__';

describe('Component {{pascalCase name}}', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<{{pascalCase name}}Component />, div);
  });
});