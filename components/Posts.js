import Post from "./Post";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const Posts = ({ posts }) => {
  const [realtimePosts, loeading, error] = useCollection(
    db.collection(("posts").orderBy("timestamp", "desc"))
  );

  return (
    <div>
      {realtimePosts
      // client side rendering
      ? realtimePosts?.docs.map(post => (
          <Post 
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            postImage={post.data().postImage}
          />
      ))
      // server side rendering
      : posts.map(post => (
          <Post 
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            postImage={post.data().postImage}
          />
      ))}
    </div>
  );
}

export default Posts
