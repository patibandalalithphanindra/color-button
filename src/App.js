import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
      style={{backgroundColor : disabled ? 'gray' : buttonColor}}
      onClick={() => setButtonColor(newButtonColor)}
      disabled={disabled}>
        Change to {newButtonColor}
      </button>
      <input 
      type="checkbox" 
      onChange={(e)=> {setDisabled(e.target.checked)}}
      defaultChecked={disabled}
      id = "enable-button-checkbox"
      />
      <label htmlFor='enable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
