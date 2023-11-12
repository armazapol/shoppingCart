import { useState } from "react";

let dataPerPage = 5

export function usePagination (data) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(dataPerPage);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.toReversed().slice(firstPostIndex, lastPostIndex);

    return {postsPerPage, currentPage, setCurrentPage, currentPosts}

}