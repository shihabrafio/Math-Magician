import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import Calculator from './component/calculator';
import FetchData from './component/fetch';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Quote" element={<FetchData />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
