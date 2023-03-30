
import './App.css';
import Login from './components/Login';
import { Routes ,Route, BrowserRouter as  Router, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Details';
function App() {
  return (
    <div className="App">
 <Router>
  <Header />
<Routes>
<Route  path='/' element={<Login />}></Route>
<Route path='/home' element={<Home />}></Route>
<Route path='/detail:id' element={<Detail />} ></Route>
</Routes>
  
 </Router>

    </div>
  );
}

export default App;

