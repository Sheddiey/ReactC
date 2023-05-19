import ReactDOM from 'react-dom/client';

import App from './App';
import StateProvider from 'context';
import 'index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StateProvider>
    <App />
  </StateProvider>
);
