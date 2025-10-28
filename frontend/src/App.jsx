import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './Login/signIn';
import SignUpPage from './Login/SignUp';
import Home from './HomePage/home';

function App() {
  return (
    <Home/>
    // <BrowserRouter>

    //   <Routes>
    //     {/* <Route path="/" element={<SignInPage />} />
    //     <Route path="/SignIn" element={<SignInPage />} />
    //     <Route path="/SignUp" element={<SignUpPage />} /> */}
        
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;