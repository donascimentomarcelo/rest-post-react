import React from 'react';
import './pagination.css';

const ListPagination = props => {
  if (props.totalElements <= 10) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.totalElements / props.linesPerPage); ++i) {
    range.push(i);
  }

  const setPage = page => props.onSetPage(page);

  return (
    <nav className='align-pagination'>
      <ul className="pagination">

        {
          range.map(v => {
            const isCurrent = v === props.currentPage;
            const onClick = ev => {
              ev.preventDefault();
              setPage(v);
            };
            return (
              <li
                className={ isCurrent ? 'page-item active' : 'page-item' }
                onClick={onClick}
                key={v.toString()}>

                <a className="page-link" href="">{v + 1}</a>

              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

export default ListPagination;