import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [activePage, setActivePage] = useState(currentPage);

  const createPagination = (totalPages, page) => {
    let liTags = [];
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;

    if (page > 1) {
      liTags.push(
        <li key="prev" className="btn prev" onClick={() => handlePageChange(page - 1)}>
          <span><i className="fas fa-angle-left"></i> Prev</span>
        </li>
      );
    }

    if (page > 2) {
      liTags.push(
        <li key="first" className="first numb" onClick={() => handlePageChange(1)}>
          <span>1</span>
        </li>
      );

      if (page > 3) {
        liTags.push(
          <li key="dots" className="dots">
            <span>...</span>
          </li>
        );
      }
    }

    if (page === totalPages) {
      beforePage = beforePage - 2;
    } else if (page === totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (page === 1) {
      afterPage = afterPage + 2;
    } else if (page === 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }

      if (plength === 0) {
        plength = plength + 1;
      }

      active = page === plength ? 'active' : '';

      liTags.push(
        <li key={plength} className={`numb ${active}`} onClick={() => handlePageChange(plength)}>
          <span>{plength}</span>
        </li>
      );
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        liTags.push(
          <li key="dots" className="dots">
            <span>...</span>
          </li>
        );
      }

      liTags.push(
        <li key="last" className="last numb" onClick={() => handlePageChange(totalPages)}>
          <span>{totalPages}</span>
        </li>
      );
    }

    if (page < totalPages) {
      liTags.push(
        <li key="next" className="btn next" onClick={() => handlePageChange(page + 1)}>
          <span>Next <i className="fas fa-angle-right"></i></span>
        </li>
      );
    }

    return liTags;
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      <ul>
        {createPagination(totalPages, activePage)}
      </ul>
    </div>
  );
};

export default Pagination;
