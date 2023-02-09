import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

import Loader from "./Ui/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    getData();
  }, []);

  if (!categories.length)
    return (
      <div className="categories">
        <Loader />
      </div>
    );

  return (
    <div className="categories">
      <h3 className="categories__title">kategorie</h3>
      <ul className="categories__list">
        {categories.map((item) => (
          <li key={item.name} className="categories__item">
            <Link href={`/kategorie/${item.slug}`} className="categories__link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
