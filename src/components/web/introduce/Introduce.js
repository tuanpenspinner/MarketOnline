import React, { Component } from "react";

export default class Introduce extends Component {
  render() {
    return (
      <div className="box-introduce">
        <div className="banner-introduce">
          <img src="assets/image/introducer-banner.jpg" alt="" className="img-banner-introduce"></img>
          <div className="blur-banner-introduce"></div>
          <h5>Giới thiệu</h5>
        </div>
        <div className="content-introduce">
          <div className="title-introduce">
            <h5>Kadonfarm </h5>
          </div>
          <div className="description">
            Dự án “Nông nghiệp canh tác thuận tự nhiên” mang tên Kadon Collective quyết định thực hiện chương trình tiên phong trồng rau sạch canh tác
            theo phương pháp thuận tự nhiên với mong muốn đưa nguồn rau sạch đến với cộng đồng, tạo điều kiện để người nông dân được trồng rau sạch
            trên mảnh vườn của họ, cải thiện được môi trường đất và nước từ năm 2018, bắt đầu từ vùng đất Đơn Dương thuộc tỉnh Lâm Đồng
          </div>
          <div className="row mt-5">
            <div className="col-xl-3">
              <div className="item-introduce">
                <img src="assets/image/introduce.jpg" alt="logo" width="150"></img>
                <div>Rau được trồng theo phương pháp “ canh tác thuận tự nhiên” không sử dụng bất cứ một loại phân thuốc hóa học</div>
              </div>
              <div className="item-introduce mt-5">
                <img src="assets/image/introduce-1.jpg" alt="logo" width="150"></img>
                <div>
                  Rau củ quả trồng trong môi trường tự nhiên vừa là thức ăn, vừa là những vị thuốc giúp bảo vệ sức khỏe và phòng ngừa bệnh tật
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-auto text-center">
              <img src="assets/image/introduce-2.jpg" alt="logo" width="400"></img>
            </div>
            <div className="col-xl-3">
              <div className="item-introduce">
                <img src="assets/image/introduce-3.jpg" alt="logo" width="150"></img>
                <div>Cây trồng hút chất dinh dưỡng từ mẹ thiên nhiên và hấp thụ những dưỡng chất cần thiết như hàm lượng vitamin</div>
              </div>
              <div className="item-introduce mt-5">
                <img src="assets/image/introduce-4.png" alt="logo" width="150"></img>
                <div>Canh tác nông nghiệp thuận tự nhiên không những mang lại rất nhiều lợi ích sức khỏe con nười và môi trường sinh thái</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
