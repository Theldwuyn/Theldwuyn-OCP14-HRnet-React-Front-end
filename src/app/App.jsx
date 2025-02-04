import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { store } from './store';
import AppRouter from '../router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
