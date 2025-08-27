import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Add from './pages/Add'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/Add" 
          element={<Add />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
