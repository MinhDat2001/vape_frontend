import React from 'react';
import './styles.css';

function ProductContentDes1(props) {
    return (
        <div className="mota mota1 thanh-phan">
            <p style={{ textAlign: 'justify' }}>
                <span style={{ fontSize: 14 }}>
                    {/* <div  className="thanh-phan"></div> */}
                    {props.data}
                </span>
            </p>
        </div>
    )
}

export default ProductContentDes1
