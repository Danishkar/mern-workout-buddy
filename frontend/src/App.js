import {Routes, Route, useNavigate } from 'react-router-dom';
// pages & components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {
  const [logged,setLogged] = useState(false);
  const navigate = useNavigate();
  // const navigateTo = () => history.push('/')
  const toggling_logged = ()=>{
    setLogged((prevLogged)=>(!prevLogged));
    navigate("/")
  }

  return (
    
      <div className="App">
        <Navbar />
        <div className="pages">
          <Routes>
            {logged === false ? <Route path='/' element={<Home/>} /> : null }
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/signup'
              element={<Signup toggling_logged={toggling_logged} />}
            />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
