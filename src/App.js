import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import routes from './routes';

function App() {
  return (
    <div>
      <Navbar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
