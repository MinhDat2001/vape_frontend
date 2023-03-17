function ProductContentTableRow(props) {
    return (
        <div className="item">
            <div>
                <span>{props.name}</span>
                <span>   {props.value}</span>
            </div>
        </div>
    )
}

export default ProductContentTableRow
