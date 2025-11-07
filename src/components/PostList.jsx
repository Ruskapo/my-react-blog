import React, { useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts = [], title, remove }) => {
  // Храним по ref на каждый пост, чтобы передавать в CSSTransition nodeRef
  const refs = useRef(new Map());
  const getNodeRef = (id) => {
    if (!refs.current.has(id)) {
      refs.current.set(id, React.createRef());
    }
    return refs.current.get(id);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {posts.length === 0 ? (
        <h2 style={{ textAlign: "center", opacity: 0.7 }}>
          Посты не были найдены!
        </h2>
      ) : (
        <TransitionGroup>
          {posts.map((post, index) => {
            const nodeRef = getNodeRef(post.id);
            return (
              <CSSTransition
                key={post.id}
                nodeRef={nodeRef}
                timeout={500}
                classNames="post"
              >
                {/* ref уходит в корневой div внутри PostItem (через forwardRef) */}
                <PostItem
                  ref={nodeRef}
                  remove={remove}
                  number={index + 1}
                  post={post}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
    </div>
  );
};

export default PostList;
