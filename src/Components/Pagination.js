import React from 'react';

const Pagination = (props) => {

    const [onLeftClick, onRightClick, page, totalPages] = props;

    return(
        <div className='pagination'>
            <button onClick={onLeftClick}>
                <div>&#8592;</div>
            </button>
            <div>{page} de {totalPages}</div>
            <button>
                <div onClick={onRightClick}>&#8594;</div>
            </button>
        </div>
    );
}

export default Pagination;