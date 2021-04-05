import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space } from "antd";
import { getDetailBlog } from "../../../state/actions/webActions";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";

const DetailBlog = () => {
  const detailBlogReducer = useSelector((state) => state.web.detailBlog);
  const newestBlog = useSelector((state) => state.web.newestBlog);
  const isLoading = useSelector((state) => state.web.isLoading);
  const detailBlog = detailBlogReducer?.length > 0 ? detailBlogReducer[0] : "";
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    loadDetailBlog(id);
  }, [id]);

  const loadDetailBlog = (id) => {
    const payload = {
      filter: {
        id: id,
      },
      paging: {
        offset: 0,
        limit: 10,
      },
    };
    dispatch(getDetailBlog(payload));
  };
  if (isLoading)
    return (
      <div className="loadingData">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    );
  return (
    <div className="blog">
      <div className="row pt-4">
        <div className="col-lg-3 pl-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Tìm kiếm" />
            <div className="input-group-append">
              <button className="btn btn-custom" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="list-blog ">
            <h5 className="font-weight-bold">Bài viết mới</h5>
            {newestBlog.map((item, key) => {
              return (
                <Link to={`/detail-blog/${item._id}`} key={key}>
                  <div className="blog-item">
                    <img src={item.image} alt="" width="40" height="40" className="mr-3 " />
                    <div className="content-blog">{item.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="col-lg-9 mt-3 detail-blog ">
          <div className="title-detail-blog">{detailBlog?.title}</div>
          <div className="time-blog">{dayjs(detailBlog?.createdAt).format("DD/MM/YYYY")}</div>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: detailBlog?.content }} className="ck-content ck-editor__editable"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
