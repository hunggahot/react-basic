import logo from './logo.svg';
import './App.scss';

import FormComponent from './Example/FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <FormComponent />
      </header>
    </div>
  );
}

export default App;