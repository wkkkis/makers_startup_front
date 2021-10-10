import React, { useEffect } from 'react';

//Styles
import './styles/app.scss';
import 'antd/dist/antd.css';

//Routes
import AppRouter from './routes/AppRouter';
import { useDispatch } from 'react-redux';
import { getProducts } from './store/actions/productActions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className="main_page">
      <AppRouter />
    </div>
  );
}

export default App;
