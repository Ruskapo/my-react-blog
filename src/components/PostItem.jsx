import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = forwardRef(({ post, remove }, ref) => {
  const navigate = useNavigate();

  return (
    <div ref={ref} className="panel">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "flex-start",
        }}
      >
        <div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            {post.id}. {post.title}
          </div>
          <div className="muted">{post.body}</div>
        </div>

        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <MyButton
            variant="brand"
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            Открыть
          </MyButton>
          <MyButton variant="danger" onClick={() => remove(post)}>
            Удалить
          </MyButton>
        </div>
      </div>
    </div>
  );
});

export default PostItem;
