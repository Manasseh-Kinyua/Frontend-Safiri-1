
import './App.css';
import LoginPage from './login/LoginPage';
import NavBar from './navbar/NavBar';
import Profile from './profile/Profile';
import Home from './home/Home';
import './App.css';
import Main from './signup/signup'
import Book from './signup/register';

import Dashboard from './dashboard/dashboard';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (

//     // <div>
//     //   {/* <NavBar/>
//     //   <Profile/>
//     //   <LoginPage      <Home/>
// /> */}
//     // </div >

    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
        <Routes>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;