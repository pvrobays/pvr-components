import './App.css';
import {defineCustomElements, PvrAutocomplete, PvrButton, PvrIcon} from 'react-library';

defineCustomElements();

function App() {
    return (
        <div className="App" data-theme="dark">
            <PvrButton type="secondary">Secondary button</PvrButton>
            <PvrAutocomplete></PvrAutocomplete>
            <PvrIcon type="search"></PvrIcon>
        </div>
    );
}

export default App;
