
import { useEffect } from 'react';
import Header from './pages/header/Header';
import { useDispatch } from 'react-redux';
import { getProducts } from './Redux/Actions/ProductAction';
import Main from './pages/Products/Main';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/Products/ProductDetail';
import DetailView from './pages/Products/DeatilView';
import Cart from './pages/Cart/Cart';

function App() {
  //const { products } = useSelector(state => state.getProducts)
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
     <Header />
     <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/products/:id" element={ <DetailView /> } />
      <Route path="/cart" element={ <Cart /> } />


     </Routes>
    </>
  );
}

export default App;
