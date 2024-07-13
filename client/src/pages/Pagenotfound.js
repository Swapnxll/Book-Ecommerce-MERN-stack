import React from 'react';
import Layouts from '../components/Layout/Layouts';
import { Link } from 'react-router-dom';


const Pagenotfound = () => {
  //const pageNotFoundImageUrl = '../../public/images/pagenotfound.jpg'; // Replace with your actual image URL

  return (
    <Layouts title={"go back- page not found"}>
      <div className="pnf">
      <img src="/images/pagenotfound.jpg" alt="Page Not Found" className="pnf-image" />
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
        Go Back
      </Link>
      </div>
    </Layouts>
  );
}

export default Pagenotfound;

