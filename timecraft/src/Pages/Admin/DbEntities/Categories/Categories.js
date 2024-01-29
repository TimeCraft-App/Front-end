import React, { useState, useEffect } from "react";
import { Variables } from "../../../../Variables";
import axios from "axios";

import "../Entity.css";
import SimpleNavbar from "../Navbar/SimpleNavbar";

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [noMoreCategories, setNoMoreCategories] = useState(false);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + `Category/Categories?page=${currentPage}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      const newCategories = response.data;
      if (newCategories.length === 0) {
        setNoMoreCategories(true);
      }
      if (currentPage === 1) {
        setCategoryList(newCategories);
      } else {
        setCategoryList((prevCategories) => [...prevCategories, ...newCategories]);
      }
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      const response = await axios.delete(
        Variables.API_URL + `Category/Category?id=${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      }
      );
      setCategoryList((prevCategories) =>
        prevCategories.filter((category) => category.id !== id)
      );
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <>
      <SimpleNavbar />
      <div className="entity__container">
        <h1>Categories</h1>
        <div className="add">
          <a href="AddCategory" className="button">
            Create Category
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Created On</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.length > 0 &&
              categoryList.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>{category.createdOn}</td>
                  <td>
                    <a
                      href={`editcategory/${category.id}`}
                      className="edit__button btn"
                    >
                      Edit
                    </a>
                    <button
                      type="button"
                      onClick={() => handleDeleteCategory(category.id)}
                      className="delete__button btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!noMoreCategories && (
          <button type="button" className="load__more" onClick={getCategoryList}>
            Load More
          </button>
        )}
        {noMoreCategories && (
          <h3 className="reached__final__page">Reached final page!</h3>
        )}
      </div>
    </>
  );
};

export default Categories;
