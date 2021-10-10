import React, { useEffect } from 'react';
import ProductsContent from '../components/ProductsContent';
import SubNavbar from '../components/SubNavbar';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/productActions';
import { getCategories } from '../store/actions/categoriesAction';

const Main = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [])

  return (
    <div>
      <SubNavbar />
      <ProductsContent />
    </div>
  )
}

export default Main;