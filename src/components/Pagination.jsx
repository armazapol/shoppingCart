import React, { useEffect } from "react";
import { Pagination as PaginationComponent } from "@nextui-org/react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = Math.ceil(totalPosts / postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPosts]);

  return (
    <div className="flex justify-center">
      <PaginationComponent
        showControls
        total={pages}
        page={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
