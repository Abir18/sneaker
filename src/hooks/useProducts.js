import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://sneakers-website.herokuapp.com/products')
      .then(response => {
        // console.log(response.data);
        setProducts(response.data);
      });
  }, []);
  return { products };
};

export default useProducts;
