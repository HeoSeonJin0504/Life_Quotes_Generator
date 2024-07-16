import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Link to="/">
      <img className="banner" alt="banner" src="img/banner.jpg" style={{ width: '20%', height: 'auto' }} />
    </Link>
  );
};

export default Banner;
