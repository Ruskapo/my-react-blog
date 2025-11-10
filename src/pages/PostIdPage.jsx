import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [
    fetchPostById,
    isLoading,
    error,
   ] = useFetching(async (postId) => {
    const responce = await PostService.getById(postId);
    setPost(responce.data);
  });
   const [
    fetchComments,
    isComLoading,
    comError,
   ] = useFetching(async (postId) => {
    const responce = await PostService.getCommientsByPostID(postId);
    setComments(responce.data);
  });

  useEffect(() => {
    if (id) fetchPostById(id);
    fetchComments(id)
  }, [id]);
  

  if (!id) return <h1>Некорректный id</h1>;
  if (error) return <h1>Ошибка: {String(error)}</h1>;
  if (isLoading || !post) return <Loader />;


  return (
    <div>
      <h1>Вы открыли страницу поста с ID {id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>
        Коментарии
      </h1>
      {isComLoading
        ? <Loader/>
        : <div>
            {comments.map(comm =>
                <div style={{marginTop: 15}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}
        </div>
      
      
      }
    </div>
  );
};

export default PostIdPage;
