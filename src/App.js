import React from 'react';

//Styles
import './styles/app.scss';

//Routes
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="main_page">
      <AppRouter />
    </div>
  );
}

export default App;
