import React, { Component } from "react";

export default class Policy extends Component {
  render() {
    return (
      <div className="box-policy">
        <div className="banner-policy">
          <img src="assets/image/policy-banner.jpg" alt="" className="img-banner-policy"></img>
          <div className="blur-banner-policy"></div>
          <h5>Chính sách</h5>
        </div>
        <div className="content-policy">
          <div>
            <h3>Lorem Ipsum là gì?</h3>
            <p>
              <strong>Lorem Ipsum</strong>&nbsp;chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.
              Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn
              văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học
              văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in
              những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
            </p>
          </div>
          <div>
            <h3>Tại sao lại sử dụng nó?</h3>
            <p>
              Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày
              văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu “Nội dung, nội dung, nội dung” là nó khiến văn bản giống
              thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và
              nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều
              phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục).
            </p>
          </div>
          <div>
            <h3>Nó đến từ đâu?</h3>
            <p>
              Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ
              những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư của
              trường Hampden-Sydney College (bang Virginia – Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất, “consectetur”, trích từ một
              đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối
              cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của “De Finibus Bonorum et Malorum” (Đỉnh tối thượng
              của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận thuyết đạo lí rất phổ biến trong thời kì
              Phục Hưng.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
