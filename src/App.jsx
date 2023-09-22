import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage'
import SignUp from './components/SignUp';
import Photos from './components/Photos';
import PrivateRoute from './components/PrivateRoute';
import { auth } from './firebase';

function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route
          path="/photos"
          element={<PrivateRoute element={<Photos />} authenticated={authenticated} />}
        />
      </Routes>
     
    </Router>
  )
}

export default App
