import React, { forwardRef } from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom'


// Оборачиваем в forwardRef — это нужно для работы CSSTransition без findDOMNode
const PostItem = forwardRef(({ post, remove}, ref) => {
  
  const navigate = useNavigate()

  return (
    <div ref={ref} className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
});

export default PostItem;

