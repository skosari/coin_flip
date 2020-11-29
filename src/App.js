import Flip from './Flip'
import './App.css';

function App() {
  return (
    <div className="App">
      <Flip />
      <Flip coin={'dime'} />
      <Flip coin={'quarter'} />
    </div>
  );
}

export default App;
