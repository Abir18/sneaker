import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://polar-bastion-01816.herokuapp.com/bikes')
      .then(response => {
        // console.log(response.data);
        setProducts(response.data);
      });
  }, []);
  return { products };
};

export default useProducts;
