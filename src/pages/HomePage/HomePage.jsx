import { Header } from '../../Components';
import { useEffect, useState } from 'react';
import { api } from '../../api'
import { ProductsGrid } from './ProductsGrid'
import './HomePage.css'


function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    
    const getHomeData = async () => {
      const response = await api.get('/api/products')
      setProducts(response.data);
    };
    
    getHomeData(); 
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
};

export default HomePage;