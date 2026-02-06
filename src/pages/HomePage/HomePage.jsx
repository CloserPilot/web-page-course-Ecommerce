import { Header } from '../../Components';
import { useEffect, useState } from 'react';
import { api } from '../../api'
import { ProductsGrid } from './ProductsGrid'
import './HomePage.css'


function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);

  useEffect(() => {
    api.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      })
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  )
};

export default HomePage;