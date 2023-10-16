import React from 'react';
import Routers from './Route';
import AnimationThemeProvider from './_helper/AnimationTheme/AnimationThemeProvider';
import CustomizerProvider from './_helper/Customizer/CustomizerProvider';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className="App">
    <CustomizerProvider>
      <AnimationThemeProvider>
        <Routers />
      </AnimationThemeProvider>
    </CustomizerProvider>

    <ToastContainer
      position="top-right"
      autoClose={2000}
    />
  </div>
);

export default App;
