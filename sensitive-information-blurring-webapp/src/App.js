import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './components/upload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/upload' element={<Upload/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
