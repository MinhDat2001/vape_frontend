import React from 'react';
import './styles.css';

function ProductContentTableRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value}</td>
        </tr>
    );
}

export default ProductContentTableRow;
