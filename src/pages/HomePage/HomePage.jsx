import { Header } from '../../Components';
import { useEffect, useState } from 'react';
import { api, fullURL } from '../../api'
import { formatMoney } from '../../utils'
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
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>
                <div className="product-rating-container">
                  <img className="product-rating-stars" src={`${fullURL}/images/ratings/rating-${product.rating.stars * 10}.png`} />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  {formatMoney(product.priceCents)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src={`${fullURL}/images/icons/checkmark.png`} />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
};

export default HomePage;