import React from "react";
import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ReactPaginate from "react-paginate";
import { productData } from "../../Components/ProductCard/Data";

const ProductList = () => {
  const [prData, setProductData] = useState(productData);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = prData
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <div className="productList">
          <ProductCard item={product} key={product.id} />
        </div>
      );
    });

  const pageCount = Math.ceil(prData.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-wrap justify-center gap-[50px]">
      {displayProducts}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default ProductList;
