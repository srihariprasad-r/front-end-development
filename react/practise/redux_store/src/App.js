import Shop from './shop/Shop';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Shop />
      </div>
    </Provider>
  );
}

export default App;
