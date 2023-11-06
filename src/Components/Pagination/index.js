import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange, maxVisiblePages, onDelete }) {
  const pageButtons = [];

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={i === currentPage ? 'active' : ''}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="pagination fixed">
      <button className='delete' onClick={() => onDelete()}>Delete Selected</button>
      <button className='hide' onClick={() => onPageChange(1)} disabled={isFirstPage}>&lt;&lt;</button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={isFirstPage}>&lt;</button>
      {pageButtons}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={isLastPage}>&gt;</button>
      <button className='hide' onClick={() => onPageChange(totalPages)} disabled={isLastPage}>&gt;&gt;</button>
    </div>
  );
}

export default Pagination;