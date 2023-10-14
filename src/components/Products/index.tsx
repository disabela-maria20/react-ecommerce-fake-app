import React from "react";

const Products = ({ data }: { data: ProductProps }) => {
  return (
    <div className="w-full">
      <img src={data.images[0]} alt="" className="img-fluid" />
      <h4>{data.price}</h4>
      <h5>{data.title}</h5>
    </div>
  );
};

export default Products;
