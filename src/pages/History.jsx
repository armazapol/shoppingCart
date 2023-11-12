import { useCart } from "../hooks/useCart.js";
import Pagination from "../components/Pagination.jsx";
import { usePagination } from "../hooks/usePagination.js";
import HistoryList from "../components/HistoryList.jsx";

const History = () => {
  const { getHistoryProducts } = useCart();
  const historyCarts = getHistoryProducts();

  const { postsPerPage, currentPage, setCurrentPage, currentPosts } =
    usePagination(historyCarts);

  return (
    <div>
      <h2 className="text-lg lg:text-2xl mb-5 lg:mb-10">
        Historial de Compras
      </h2>
      <div className="flex flex-col gap-5 lg:gap-10">
        <HistoryList historyCarts={currentPosts} />
        <Pagination
          totalPosts={historyCarts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default History;
