import ProductContentTableRow from './product-content-table-row'

function ProductContentTable() {

    const datas = [{name: "Hãng", value: "Vapor Storm"}, {name: "Xuất Xứ", value: "Trung Quốc"}, {
        name: "Đèn hiển thị",
        value: "LED"
    }, {name: "Pin", value: "560mAh"}, {name: "Dung tích pod", value: "1.6ml"}, {
        name: "Kích thước (mm)",
        value: "92 x 16"
    }, {name: "Loại sạc", value: "Type-C USB"}, {name: "Cơ chế đốt", value: "Cảm biến"}, {
        name: "Coil",
        value: "Coil 1.0ohm"
    }]

    const dataComponents = datas.map((tableRow, index) => {
        return <ProductContentTableRow key={index} name={tableRow.name} value={tableRow.value}/>;
    });

    return (<div className="thongso">
            <h3 className="text-center">Thông số kỹ thuật</h3>
            {dataComponents}
        </div>


    )
}

export default ProductContentTable
