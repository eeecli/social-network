import React, {useState} from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
  const pages = [];
  const pagesCount = Math.ceil(props.elemCount / props.pageSize);

  const portionsCount = Math.ceil(pagesCount / props.portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftSidePortion = (portionNumber - 1) * props.portionSize + 1;
  const rigthSidePortion = portionNumber * props.portionSize;
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  return (
    <div className={classes.pagination}>
      {portionNumber > 1 && (
        <span
          tabIndex={0}
          role='button'
          aria-disabled={portionNumber > 1}
          onClick={() => setPortionNumber(1)}
          onKeyDown={() => setPortionNumber(1)}>
          &lt;&lt;
        </span>
      )}
      {portionNumber > 1 && (
        <span
          tabIndex={0}
          role='button'
          aria-disabled={portionNumber > 1}
          onClick={() => setPortionNumber(portionNumber - 1)}
          onKeyDown={() => setPortionNumber(portionNumber - 1)}>
          &lt;
        </span>
      )}
      {pages
        .filter((p) => p >= leftSidePortion && p <= rigthSidePortion)
        .map((p) => (
          <span
            role='button'
            tabIndex={0}
            key={p}
            onClick={() => props.onPageChanged(p)}
            onKeyDown={() => props.onPageChanged(p)}
            className={props.currentPage === p ? classes.currentPage : undefined}>
            {p}
          </span>
        ))}
      {portionsCount > portionNumber && (
        <span
          tabIndex={0}
          role='button'
          onClick={() => setPortionNumber(portionNumber + 1)}
          onKeyDown={() => setPortionNumber(portionNumber + 1)}>
          &gt;
        </span>
      )}
      {portionsCount > portionNumber && (
        <span
          tabIndex={0}
          role='button'
          aria-disabled={portionNumber > 1}
          onClick={() => setPortionNumber(portionsCount)}
          onKeyDown={() => setPortionNumber(portionsCount)}>
          &gt;&gt;
        </span>
      )}
    </div>
  );
};

export default Pagination;
