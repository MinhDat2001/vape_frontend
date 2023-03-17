import ProductContentDes2Des from "~/pages/user/Product/product-content-des2-des";
import ProductImage from "~/pages/user/Product/product-image";
import ProductContentTable from "~/pages/user/Product/product-content-table";

function ProductContentDes2() {
    const data1 = "Anh em còn nhớ sự hiện diện của chiếc “Pod tí hon” vào\n" +
        "                    khoảng 3 năm về trước không ? 1 đồng chí rất nhỏ mà lại có\n" +
        "                    võ - bé tí tẹo teo nhưng khi đưa lên miệng thử 1 hơi thì…";
    const data2 = "Ares của nhà VaporStorm từ trước đã được biết đến với cái\n" +
        "                    tên “pod miniature thành công nhất”, với chất lượng sử dụng\n" +
        "                    gần như ngang hàng với các thiết bị ở phân khúc cao hơn\n" +
        "                    hoặc kích cỡ lớn hơn, không chỉ dừng lại ở đó, Ares còn được\n" +
        "                    biết đến với khả năng sử dụng rất tốt cả juice freebase lẫn\n" +
        "                    saltnic, với lượng vị đưa lên rất ấn tượng và bất ngờ. Đặc\n" +
        "                    biệt nhất, là với kích cỡ nhỏ nhắn như vậy mà Ares vẫn có cơ\n" +
        "                    chế đổi hơi hút từ DTL -&gt; RDTL bằng cách đổi mặt\n" +
        "                    cartridge, rất “đỉnh”.";
    const data3 = "Không dừng lại ở thành công của Ares, VS cho ra thêm bản\n" +
        "                    “nâng cấp” dưới tên gọi “Ares SE” - phiên bản mới với cải\n" +
        "                    tiến mới. Giữ nguyên các tiêu chuẩn về chất lượng như giá\n" +
        "                    mềm mà chất lượng cao, Ares SE còn được điều chỉnh để thân\n" +
        "                    thiện hơn với môi trường và cực kỳ ổn định trong suốt quá\n" +
        "                    trình sử dụng.";
    const data4 = "Phần cartridge được cải tiến mức điện trở xuống\n" +
        "                    thấp; từ 1.3ohm xuống 1.0ohm, cho phép máy đốt công suất\n" +
        "                    cao hơn, đưa vị và hương lên đậm hơn, nhiều khói hơn. Và\n" +
        "                    đương nhiên rồi, độ ổn định pin cũng được điều chỉnh lại,\n" +
        "                    cảm nhận được rất rõ trong quá trình sử dụng, giảm tải tối\n" +
        "                    đa.";
    const data5 = "Giờ Ares không chỉ “nhỏ mà có võ nữa”, mà giờ Ares là “nhỏ\n" +
        "                    và biết rất nhiều võ” luôn!!!";

    const img = "https://mega.com.vn/media/news/0306_tong-quan-ve-nhan-vat-yae-miko-genshin-impact.jpg";

    const datas = [data1, data2, data3, data4, data5];

    const dataComponents = datas.map((data) => {
        return <ProductContentDes2Des key={data} data={data} />;
    });


    return (
        <div className="mota mota2">
            <p>
                <span/>
            </p>
            <p style={{textAlign: 'center'}}>
                <ProductImage img={img}/>
            </p>
            <p style={{textAlign: 'center'}}>&nbsp;</p>

            {dataComponents}

            <ProductContentTable />

            <h2 style={{textAlign: 'justify'}}>
                <span style={{fontSize: 14}}>
                    <strong>Hộp bao gồm:</strong>
                </span>
            </h2>
            <p></p>
            <p>
                <span style={{fontSize: 14}}>
                    1 Ares SE Pod Mod
                    <br/>1 pod rỗng
                    <br/>1 dây sạc USB Type-C
                    <br/>1 hướng dẫn sử dụng
                </span>
            </p>

        </div>
    )
}

export default ProductContentDes2
