import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from './components/login/SignUp';
import SignIn from './components/login/SignIn'
import HomePage from './components/pages/HomePage';
import Navbar from './components/nav/Navbar';
import Profile from './components/login/Profile';
import Cart from './components/pages/Cart';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Routes>
         <Route exact path="/" element={<SignIn/>}/>
         <Route path="/SignUp" element={<SignUp/>}  />
         <Route path="/Home" element={<HomePage/>}/>  
         <Route path="/Cart" element={<Cart/>}/>  
         <Route path="/Profile" element={<Profile/>}/>  
       </Routes>
     </Router>
    </div>
  );
}

export default App;
