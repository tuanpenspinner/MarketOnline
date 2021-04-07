import { Comment, Tooltip } from "antd";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";

dayjs.extend(relativeTime);

function CommentItem({ author, avatar, content, date }) {
  return (
    <Comment
      author={author}
      avatar={avatar}
      content={content}
      datetime={
        <Tooltip title={dayjs(date).locale("vi").format("DD/MM/YYYY HH:mm:ss")}>
          <span>{dayjs(date).locale("vi").fromNow()}</span>
        </Tooltip>
      }
    />
  );
}

export default CommentItem;
