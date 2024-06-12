import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Login,Contact,UserDashBord,Home,Signup } from './screens/index';
function App() {
  return (
    <div className="page-body">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<UserDashBord/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
