import React from 'react';
import ReactDOM from 'react-dom';
import { MainLayoutComponent} from './MainLayout';

describe('Component MainLayout', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainLayoutComponent />, div);
  });
});