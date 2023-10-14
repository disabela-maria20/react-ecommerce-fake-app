import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../../components/Menu";

const Category = () => {
  const { name } = useParams();

  return (
    <>
      <Menu />
      <h1>{name}</h1>
    </>
  );
};

export default Category;
