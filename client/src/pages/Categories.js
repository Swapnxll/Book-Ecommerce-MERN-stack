import React, { useState, useEffect } from "react";
import useCategory from "../hooks/useCategory";
import Layouts from "../components/Layout/Layouts";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layouts>
      <div className="container">
        <h1 className="text-center my-5">Categories</h1>
        <div className="row justify-content-center">
          {categories.map((c) => (
            <div className="col-md-4 mb-4" key={c._id}>
              <div className="card category-card">
                <div className="card-body">
                  <Link to={`/category/${c.slug}`} className="category-link">
                    <div className="category-box">{c.name}</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layouts>
  );
};

export default Categories;
