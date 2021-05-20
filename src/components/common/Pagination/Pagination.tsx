import React, {useState} from 'react';
import classes from './Pagination.module.css';

type PropsType = {
  elemCount: number
  pageSize: number
  portionSize?: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
}

const Pagination: React.FC<PropsType> = ({elemCount, pageSize, portionSize = 10, onPageChanged, currentPage}) => {
  const pages: Array<number> = [];
  const pagesCount = Math.ceil(elemCount / pageSize);

  const portionsCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftSidePortion = (portionNumber - 1) * portionSize + 1;
  const rigthSidePortion = portionNumber * portionSize;
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
            onClick={() => onPageChanged(p)}
            onKeyDown={() => onPageChanged(p)}
            className={currentPage === p ? classes.currentPage : undefined}>
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
