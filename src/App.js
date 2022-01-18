import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import Direct from './Fun';
import Create from './components/Create'
import Storage from './Storage'
import LetterThree from './components/LetterThree'
import Events from './components/Events'
function App() {
  return (
    <div>
      <LetterThree say="I want to know letter three" name="mani" age="22"/>
      <Events/>
    </div>
  );
}

export default App;
