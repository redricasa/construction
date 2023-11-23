import React from 'react'
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider } from 'react-router-dom';

import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './screens/HomePageScreen';
import LoginUser from './screens/LoginUserScreen';
import Register from './screens/RegisterUserScreen';
import Tools from './screens/ToolsScreen';
import Materials from './screens/MaterialsScreen';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/login' element={<LoginUser />} />
      <Route path='/register' element={<Register />} />
      <Route path='/tools' element={<Tools />} />
      <Route path='/materials' element={<Materials />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') ).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
  </Provider>
)
