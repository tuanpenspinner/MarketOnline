import React, { Component } from "react";

export default class Introduce extends Component {
  render() {
    return (
      <div className="box-introduce">
        <div className="banner-introduce">
          <h5>Giới thiệu</h5>
        </div>
        <div className="content-introduce">
          <div className="title-introduce">
            <h5>Kadonfarm </h5>
          </div>
          <div className="description">
            Dự án “Nông nghiệp canh tác thuận tự nhiên” mang tên Kadon
            Collective quyết định thực hiện chương trình tiên phong trồng rau
            sạch canh tác theo phương pháp thuận tự nhiên với mong muốn đưa
            nguồn rau sạch đến với cộng đồng, tạo điều kiện để người nông dân
            được trồng rau sạch trên mảnh vườn của họ, cải thiện được môi trường
            đất và nước từ năm 2018, bắt đầu từ vùng đất Đơn Dương thuộc tỉnh
            Lâm Đồng
          </div>
          <div className="row mt-5">
            <div className="col-xl-3">
              <div className="item-introduce">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBitwTZGqi-3D-VdQA-8if46xciXj9PrpRT2DX1q7FvN7dgyoDxwwoho8eplDlqrcu2I&usqp=CAU"
                  alt="logo"
                  width="150"
                ></img>
                <div>
                  Rau được trồng theo phương pháp “ canh tác thuận tự nhiên”
                  không sử dụng bất cứ một loại phân thuốc hóa học
                </div>
              </div>
              <div className="item-introduce mt-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLRVlGhvaN8YbmpM8z17W9ZbqBLk-TfbeRb43k7pDaKXS0MH6BopeLNoLbLPM5XajI0E&usqp=CAU"
                  alt="logo"
                  width="150"
                ></img>
                <div>
                  Rau củ quả trồng trong môi trường tự nhiên vừa là thức ăn, vừa
                  là những vị thuốc giúp bảo vệ sức khỏe và phòng ngừa bệnh tật
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-auto text-center">
              <img
                src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/1/5/0/9/3189051-1-eng-GB/More-info-needed-on-organic-food-says-UAE-study.jpg"
                alt="logo"
                width="400"
              ></img>
            </div>
            <div className="col-xl-3">
              <div className="item-introduce">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO1x4CvoDWWgtmmmv6UOP0oHEEVUL3i6r3NcobhT0xcomKhACPgS-isLZljXF3wP6heM&usqp=CAU"
                  alt="logo"
                  width="150"
                ></img>
                <div>
                  Cây trồng hút chất dinh dưỡng từ mẹ thiên nhiên và hấp thụ
                  những dưỡng chất cần thiết như hàm lượng vitamin
                </div>
              </div>
              <div className="item-introduce mt-5">
                <img
                  src="https://freshrestaurants.com/wp-content/uploads/2016/02/FreshVegetables.png"
                  alt="logo"
                  width="150"
                ></img>
                <div>
                  Canh tác nông nghiệp thuận tự nhiên không những mang lại rất
                  nhiều lợi ích sức khỏe con nười và môi trường sinh thái
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
