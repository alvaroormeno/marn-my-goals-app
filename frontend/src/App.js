import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';



function App() {

  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/' element={<Login/>} />
            <Route path='/' element={<Register/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
