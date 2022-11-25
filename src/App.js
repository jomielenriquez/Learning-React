import logo from './logo.svg';
import './App.css';
import MyForm from './TestFolder/sample'
import MyApp from './TestFolder/PassState'
import PassCallBackAsProps from './TestFolder/PassCallbackAsProps'
import CallingAPI from './TestFolder/CallingAPI'

function App() {
  return (
    <div className="App">
      
      <h1>Testing daw</h1>
      <MyForm />
      <MyApp />
      <PassCallBackAsProps />
      <CallingAPI />

    </div>
  );
}

export default App;
