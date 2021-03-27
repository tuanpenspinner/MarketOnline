import React, { Component } from "react";
import JoditEditor from "jodit-react";
import { Form, Col } from "react-bootstrap";

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      validated: false,
      titleName: "Thêm",
    };
  }
  componentDidMount() {
    const { typeForm } = this.props;
    if (typeForm === 1) {
      this.setState({
        titleName: "Thêm",
      });
    } else if (typeForm === 2) {
      this.setState({
        titleName: "Chỉnh sửa",
      });
    } else {
      this.setState({
        titleName: "Xem chi tiết",
      });
    }
  }

  onChangeContent = (content) => {
    this.setState({ content: content.target.innerHTML });
  };
  onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.setState({
      validated: true,
    });
  };
  render() {
    const { toggleForm, typeForm } = this.props;
    const { content, validated, titleName } = this.state;
    const config = {
      readonly: false,
      uploader: {
        url: "http://localhost:8181/index-test.php?action=fileUpload",
      },
      height: 400,
    };
    return (
      <div className="card min-height-100vh">
        <div className="card-body">
          <div>
            <i className="fas fa-arrow-left mr-3" onClick={() => toggleForm()}></i>
            <h5>{titleName} sản phẩm</h5>
          </div>
          <div className="mt-4">
            <Form noValidate validated={validated} onSubmit={this.onSubmit}>
              <Form.Row>
                <Form.Group as={Col} xl="4">
                  <Form.Label>Mã sản phẩm</Form.Label>
                  <Form.Control type="text" placeholder="Mã sản phẩm" required />
                  <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="4">
                  <Form.Label>Tên sản phẩm</Form.Label>
                  <Form.Control type="text" placeholder="Tên sản phẩm" required />
                  <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Danh mục</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Chọn danh mục</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <span>Chi tiết sản phẩm</span>
              <JoditEditor
                value={content}
                config={config}
                tabIndex={1}
                onChange={(newContent) => {}}
                onBlur={(newContent) => {
                  this.onChangeContent(newContent);
                }}
              />
              <div className="w-100 text-center mt-3">
                {typeForm !== 3 && (
                  <button className="btn btn-custom" type="submit">
                    {titleName} sản phẩm
                  </button>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
