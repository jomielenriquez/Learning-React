import logo from './logo.svg';
import './App.css';
import MyForm from './TestFolder/sample'
import MyApp from './TestFolder/PassState'
import PassCallBackAsProps from './TestFolder/PassCallbackAsProps'
import CallingAPI from './TestFolder/CallingAPI'
import React, {useCallback} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();
  return (
    <div className="App">
      <button onClick={handle.enter}>
        Enter fullscreen
      </button>
      
      <FullScreen handle={handle}>
        <div style={{background:"white"}}>
          <h1>Testing daw</h1>
          <MyForm />
          <MyApp />
          <PassCallBackAsProps />
          <CallingAPI /> 
        </div>
        
      </FullScreen>
      

    </div>
  );
}

export default App;
