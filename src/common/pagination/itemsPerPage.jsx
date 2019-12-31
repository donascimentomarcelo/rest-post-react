import React from 'react';
import './pagination.css';

const ItemsPerPage = props => {

    const { linesPerPage, onSetItemPerPage } = props;
    const array = [10, 20, 50, 100];

    return (
        <select 
            className="form-control selector-qtd-resources"
            value={linesPerPage}
            onChange={onSetItemPerPage}>
        {      
            array.map(value => (
                <option  key={value} value={value}>{value}</option>
            ))
        }
        </select>
    );
}

export default ItemsPerPage;