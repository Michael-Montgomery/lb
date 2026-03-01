import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <HashRouter basename='/'>
    <Routes>
      <Route path='/' element={require('./pages/home/home').default()} />
      <Route path='/about' element={require('./pages/about/about').default()} />
      <Route path='/careers' element={require('./pages/careers/careers').default()} />
      <Route path='/gallery' element={require('./pages/gallery/gallery').default()} />
      <Route path='/contact' element={require('./pages/contact/contact').default()} />
      <Route path='*' element={<div><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></div>} />
    </Routes>
   </HashRouter>
  );
}

export default App;
