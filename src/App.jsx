import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage'
import SignUp from './components/SignUp';
import Photos from './components/Photos';

function App() {

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
