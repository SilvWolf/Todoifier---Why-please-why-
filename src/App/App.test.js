import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the `react-dom/client` import for React 18
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<App />);
  root.unmount();
});
