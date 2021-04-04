import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Blog = () => {
  const [listBlog, setListBlog] = useState([]);
  const [listNewBlog, setListNewBlog] = useState([]);
  useEffect(() => {
    axios({
      method: "post",
      url: "https://kadonfarm.herokuapp.com/user/blog",
      data: {
        payload: {
          filter: {},
          paging: {
            offset: 0,
            limit: 9,
          },
        },
      },
    }).then((response) => {
      let data = response.data.items;
      setListBlog([...data]);
      setListNewBlog([...data].splice(0, 5));
    });
  }, []);

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
            {listNewBlog.map((item, key) => {
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

        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-4 mt-3">{/* /.Sort by */}</div>
          </div>
          <div className="row wow fadeIn px-3">
            {listBlog.map((item, key) => {
              return (
                <div className="col-lg-4 col-md-6 col-6 mb-4" key={key}>
                  <Link to={`/detail-blog/${item._id}`}>
                    <div className="card">
                      <div className="view overlay">
                        <img src={item.image} className="card-img-top" alt="" />
                        <div className="mask rgba-white-slight" />
                      </div>
                      <div className="card-body text-left">
                        <h5 className="title-blog">{item.title}</h5>
                        <div className="time-blog">{moment(item.createdAt).format("DD/MM/YYYY")}</div>
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
