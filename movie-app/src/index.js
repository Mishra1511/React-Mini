import React from 'react';
import ReactDOM from 'react-dom/client';
import PopularMovies from './components/PopularMovie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PopularMovies/>
  </React.StrictMode>
);

