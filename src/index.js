import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./app/store";
import { Provider } from "react-redux";
// import "mdb-react-ui-kit/dist/css/mdb.min.css"
// import "@fortawesome/fontawesome-free/css/all.min.css"
import { ChakraProvider, theme, ColorModeScript } from '@chakra-ui/react'
import ColorModeSwitcher from './.colorModeSwitcher';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Provider store={store}>

        <App />
      </Provider>

    </ChakraProvider>

  </React.StrictMode>
);

