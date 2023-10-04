import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Upload from './components/upload';
import Privacy from './components/privacy';
import FAQ from './components/faq';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Upload />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
        <Route path='/privacy' element={<Privacy />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
