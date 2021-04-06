import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space } from "antd";
import { getListCommunity } from "../../../state/actions/webActions";
import dayjs from "dayjs";

const Blog = () => {
  const listCommunity = useSelector((state) => state.web.listCommunity);
  const isLoading = useSelector((state) => state.web.isLoading);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };
  const onSearch = () => {
    let filter = {};
    if (keyword) filter.keyword = keyword;
    const payload = {
      filter,
      paging: {
        offset: 0,
        limit: 9,
      },
    };
    dispatch(getListCommunity(payload));
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
            <input type="text" className="form-control" placeholder="Tìm kiếm" name="keyword" onChange={onChange} value={keyword} />
            <div className="input-group-append">
              <button className="btn btn-custom" onClick={onSearch}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="list-blog ">
            <h5 className="font-weight-bold">Bài viết mới</h5>
            {listCommunity?.map((item, key) => {
              return (
                <Link to={`/detail-community/${item._id}`} key={key}>
                  <div className="blog-item">
                    <img src={item.image} alt="" width="40" height="40" className="mr-3 " />
                    <div className="content-blog">{item.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="col-lg-9">
          <div className="row px-3">
            {listCommunity?.map((item, key) => {
              return (
                <div className="col-lg-4 col-md-6 col-6 mb-4" key={key}>
                  <Link to={`/detail-community/${item._id}`}>
                    <div className="card">
                      <div className="view overlay">
                        <img src={item.image} className="card-img-top" alt="" />
                        <div className="mask rgba-white-slight" />
                      </div>
                      <div className="card-body text-left">
                        <h5 className="title-blog">{item.title}</h5>
                        <div className="time-blog">{dayjs(item.createdAt).format("DD/MM/YYYY")}</div>
                        <div className="content-blog">{item.content}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
