import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailCommunity, getListCommunity } from "../../../state/actions/webActions";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

const DetailBlog = () => {
  const detailCommunityReducer = useSelector((state) => state.web.detailCommunity);
  const listNewCommunity = useSelector((state) => state.web.listCommunity);
  const detailCommunity = detailCommunityReducer?.length > 0 ? detailCommunityReducer[0] : "";
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(
      getListCommunity({
        filter: {},
        paging: {
          offset: 0,
          limit: 4,
        },
      })
    );
  }, []);
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
    dispatch(getDetailCommunity(payload));
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
            {listNewCommunity.map((item, key) => {
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

        <div className="col-lg-9 mt-3 detail-blog ">
          <div className="title-detail-blog">{detailCommunity?.title}</div>
          <div className="time-blog">{moment(detailCommunity?.createdAt).format("DD/MM/YYYY")}</div>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: detailCommunity?.content }} className="ck-content ck-editor__editable"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
