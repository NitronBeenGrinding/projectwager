import logo from './logo.svg';
import './App.css';
import Taskbar from './components/Taskbar';
import Alerts from './components/home/Alerts';
import Signup from './components/home/Signup';
import Stats from './components/home/Stats';

function App() {
  return (
    <div>
      <Taskbar></Taskbar>
      <Alerts></Alerts>
      <Signup></Signup>
      <Stats></Stats>
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
