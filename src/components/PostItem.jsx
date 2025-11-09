import React, { forwardRef } from "react";
import MyButton from "./UI/button/MyButton";

// Оборачиваем в forwardRef — это нужно для работы CSSTransition без findDOMNode
const PostItem = forwardRef((props, ref) => {
  const { post, number, remove } = props;

  return (
    <div ref={ref} className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
});

export default PostItem;

