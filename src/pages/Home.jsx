import React from "react";
import { useFilters } from "../hooks/useFilters";
import { products as initialProducts } from "./../data/products.json";
import { usePagination } from "../hooks/usePagination";
import Products from "../components/Products";
import Pagination from "../components/Pagination.jsx";

const Home = () => {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);
  const { postsPerPage, currentPage, setCurrentPage, currentPosts } =
    usePagination(filteredProducts);
    
  return (
    <div className="flex flex-col gap-10">
      <Products products={currentPosts} />
      <Pagination
        totalPosts={filteredProducts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
