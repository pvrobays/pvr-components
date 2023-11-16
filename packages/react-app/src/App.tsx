import './App.css';
import {PvrButton, defineCustomElements, PvrComponent} from 'react-library';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <PvrComponent first="Your" last="Name" />
      <PvrButton buttonType="secondary">Secondary button</PvrButton>
    </div>
  );
}

export default App;
