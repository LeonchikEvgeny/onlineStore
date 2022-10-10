import MaterialPagination from "@mui/material/Pagination";

const Pagination = ({ currentPage, handlePageChange }) => {
  return (
    <MaterialPagination
      boundaryCount={3}
      count={13}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default Pagination;
