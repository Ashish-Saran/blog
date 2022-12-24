import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Write from './pages/Write';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/write' element={<Write/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
