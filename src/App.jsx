import { Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Books from './pages/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />

      </Routes>
    </div>
  );
}

export default App;
