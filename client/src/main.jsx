import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from './redux/Store';
import App from './App';
import './index.css';
import Loading from './pages/hook/Loading';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
      <ToastContainer />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
