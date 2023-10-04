import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router'
import Header from './components/Header';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      
      <div className="container my-5">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
