import logo from './logo.svg';
import './App.css';
import Taskbar from './components/Taskbar';
import Alerts from './components/home/Alerts';

function App() {
  return (
    <div>
      <Taskbar></Taskbar>
      <Alerts></Alerts>
      <div>
        <p>
          ProjectWager
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
