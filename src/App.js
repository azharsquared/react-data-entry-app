import logo from './logo.svg';
import './App.css';
import TextMeaningCapture from './TextMeaningCapture';
import DuaCapture from './dua-capture';
import DuaList from './dua-list';
import AppRouter from './app-router';

function App() {
  return (
    <div className="App">
    {/* <DuaCapture/>
      <TextMeaningCapture/>

      <DuaList/> */}
      <AppRouter/>
    </div>
  );
}

export default App;
