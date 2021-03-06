import './App.css';
import { Routes, Route } from 'react-router-dom';
import TopNaavbar from './components/TopNavbar';
import Home from './components/Home';
import Service from './components/Service';



function App() {
  return (
    <div className="App">
      <TopNaavbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/' element={  <About />} /> */}
        <Route exact path='/service' element={  <Service/>} />
      </Routes>

    </div>
  );
}

export default App;
