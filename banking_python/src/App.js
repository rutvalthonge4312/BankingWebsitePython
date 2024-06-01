import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import Signup from './screens/signup';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
