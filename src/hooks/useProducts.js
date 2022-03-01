import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(loading);
  useEffect(() => {
    axios
      .get('https://sneakers-website.herokuapp.com/products')
      .then(response => {
        // console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      });
  }, []);
  return { products, loading };
};

export default useProducts;
