import TemplatePage from './pages/templatePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TemplatePage />} />
            <Route path='/test' element={<TemplatePage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </Provider>
    </>
  );
}
export default App;
