import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 style={{ fontSize: '36px', fontWeight: 300 }}>
        Sorry, Page Not Found !!
      </h1>
      <Link to="/">
        <button style={{ fontSize: '24px', cursor: 'pointer', padding: '5px' }}>
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
