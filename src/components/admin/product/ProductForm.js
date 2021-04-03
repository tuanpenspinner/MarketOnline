import { Button } from "antd";
import RichEditor from "components/common/RichEditor";
import UploadImage from "components/common/UploadImage";
import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../../state/actions/productActions";

const ProductForm = ({ onCloseForm, ...rest }) => {
  const category = useSelector((state) => state?.category);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    code: "",
    price: "",
    name: "",
    description: "",
    categoryId: "",
    image: "",
  });

  const handleChangeEditor = (data) => {
    setFormValue({ ...formValue, description: data });
  };

  const handleSubmitCreateProduct = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(createProductAction({ payload: { ...formValue } }));
  };

  const handleIpChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleUpload = (url) => {
    setFormValue({
      ...formValue,
      image: url,
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <i className="fas fa-arrow-left mr-3" onClick={onCloseForm}></i>
          <h5>Thêm sản phẩm</h5>
        </div>
        <hr />
        <div className="mt-4">
          <Form noValidate onSubmit={handleSubmitCreateProduct}>
            <Form.Row>
              <Form.Group as={Col} xl="4" className="px-3">
                <Form.Label>Mã sản phẩm</Form.Label>
                <Form.Control
                  name="code"
                  value={formValue.code}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Mã sản phẩm"
                  required
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} xl="4" className="px-3">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  name="name"
                  value={formValue.name}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Tên sản phẩm"
                  required
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xl="4" className="px-3 d-flex align-items-center">
                <Form.Label style={{ flex: "50%" }}>Ảnh sản phẩm</Form.Label>
                <UploadImage onChange={handleUpload} value={formValue.image} />
              </Form.Group>
              <Form.Group as={Col} xl="6" className="px-3">
                <Form.Label>Giá sản phẩm</Form.Label>
                <Form.Control
                  name="price"
                  value={formValue.price}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Giá của sản phầm"
                  required
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xl="6" className="px-3">
                <Form.Label>Danh mục</Form.Label>
                <Form.Control
                  name="categoryId"
                  onChange={handleIpChange}
                  as="select"
                  value={formValue.categoryId}
                  autoComplete="off"
                >
                  {category?.data?.list?.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} xl="12" className="px-3">
                <Form.Label>Chi tiết sản phẩm</Form.Label>
                <RichEditor onEditorChange={handleChangeEditor} data={formValue.description} />
              </Form.Group>
            </Form.Row>

            <div className="px-3 float-right">
              <Button htmlType="submit" className="mr-3" type="primary">
                Lưu
              </Button>
              <Button danger onClick={onCloseForm}>
                Đóng
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<blockquote><h2><span style="color:hsl(120, 75%, 60%);">Thông tin sản phẩm</span></h2></blockquote><p style="margin-left:0px;"><a href="https://www.bachhoaxanh.com/cu/khoai-lang-nhat-tui-1kg"><strong>Khoai lang</strong></a><a href="http://www.bachhoaxanh.com/cu/khoai-lang-nhat-tui-1kg"><strong>&nbsp;Nhật</strong></a>&nbsp;là một loại <a href="https://www.bachhoaxanh.com/cu">củ</a> ngon và có rất nhiều loại giống thì trong đó, khoai lang Nhật là một cái tên có lẻ được nhiều người yêu thích nhất. Khoai lang Nhật có hình dáng thon, dài. Với lớp vỏ bên ngoài màu tím, trong ruột thì vàng, hương vị ngọt dịu nhẹ, bùi nên chiếm được rất nhiều cảm tình của mọi người.&nbsp;<br>Trong Đông y củ khoai lang có vị ngọt, tính bình, có công dụng nhuận tràng, bồi bổ cơ thể, tiêu viêm, lợi mật, sáng mắt,.. đặc biệt <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/loi-ich-bat-ngo-tu-viec-an-sang-bang-khoai-lang-1136839">ăn khoai vào buổi sáng</a> sẽ giúp bạn cung cấp đầy đủ dinh dưỡng cho cơ thể, đặc biệt là chữa được nhiều bệnh nguy hiểm mà bạn không ngờ tới.<br>&nbsp;</p><figure class="image"><img src="https://i.ytimg.com/vi/Vwk0mr6jIr0/maxresdefault.jpg" alt="Món Nhật] 2 loại khoai lang Nhật nướng ngon không thể chối từ - YouTube"></figure><h2 style="margin-left:0px;">Lợi ích tuyệt vời của khoai lang</h2><p style="margin-left:0px;">Trong khoai lang Nhật chứa rất nhiều vitamin, chất xơ và giàu khoáng chất… giúp bổ sung đủ các dưỡng chất cần thiết cho cơ thể. Chính vì thế, người Nhật đánh giá rất cao loại củ này.<br>Trung bình trong mỗi củ khoai lang có chứa khoảng 26g tinh bột và chỉ bằng 1/2 lượng tinh bột có trong củ khoai tây và 1/3 tinh bột trong cơm trắng. Lượng tinh bột vừa đủ này có thể giúp người ăn no lâu mà không cần hấp thụ quá nhiều thức ăn khác, rất tốt đối với những người <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/tac-dung-cua-khoai-lang-doi-voi-viec-giam-can-996353">dùng khoai lang để giảm cân</a>.<br>Khoai được xem là loại<strong> thực phẩm vàng</strong> đối với người cao tuổi và trẻ nhỏ vì trong khoai lang Nhật chứa rất nhiều vitamin và chất xơ hỗ trợ cho hệ tiêu hóa hoạt động ổn định. Ăn một vài củ khoai lang mỗi ngày sẽ giúp cơ thể cải thiện bệnh tiểu đường, chống lại bệnh ung thư, giảm viêm và tốt cho người bệnh huyết áp.</p><h2 style="margin-left:0px;">Các món ăn ngon với khoai lang</h2><p style="margin-left:0px;">Khoai lang có thể chế biến thành một số món ăn ngon như: <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-chon-va-luoc-khoai-lang-mat-ngon-nhieu-mat-1256326">khoai lang luộc</a>, <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/he-lo-cach-nuong-khoai-lang-bang-lo-vi-song-khong-bi-suong-1083626">khoai lang nướng</a>, <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-lam-khoai-lang-ken-thom-ngon-khien-be-me-tit-993077">khoai lang kén</a>, <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-lam-banh-khoai-lang-chien-gion-trong-beo-ngoai-gion-thom-ngon-va-hap-dan-1262210">khoai lang chiên giòn</a>, <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-lam-thach-rau-cau-khoai-lang-moi-la-dep-mat-1117910">thạch rau câu khoai lang</a>, <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-nau-che-khoai-lang-deo-ngon-ngot-trang-mieng-cho-ca-nha-1273120">chè khoai lang</a>,...<br><strong>Lưu ý: </strong>Sản phẩm nhận được có thể khác với hình ảnh về màu sắc và số lượng nhưng vẫn đảm bảo về mặt khối lượng và chất lượng.</p>',
        }}
      ></div>
    </div>
  );
};

export default ProductForm;
