import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

const DetailBlog = () => {
  const [detailBlog, setDetailBlog] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getDetailBlog(id);
    getNewBlog();
  }, [id]);
  const [listNewBlog, setListNewBlog] = useState([]);
  useEffect(() => {}, []);

  const getDetailBlog = (id) => {
    axios({
      method: "post",
      url: "https://kadonfarm.herokuapp.com/user/blog",
      data: {
        payload: {
          filter: {
            id: id,
          },
          paging: {
            offset: 0,
            limit: 10,
          },
        },
      },
    }).then((response) => {
      let data = response.data.items;
      setDetailBlog(data[0]);
    });
  };
  const getNewBlog = () => {
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
      setListNewBlog([...data].splice(0, 5));
    });
  };
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
                <Link to={`/detail-blog/${item._id}`}>
                  <div className="blog-item" key={key}>
                    <img src={item.image} alt="" width="40" height="40" className="mr-3 " />
                    <div className="content-blog">{item.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="col-lg-9 mt-3">
          <div className="title-detail-blog">{detailBlog && detailBlog.title}</div>
          <div className="time-blog">{moment(detailBlog.createdAt).format("DD/MM/YYYY")}</div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
