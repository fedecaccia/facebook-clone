import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";

const Posts = () => {
  const [realtimePosts, loeading, error] = useCollection(
    db.collection(("posts").orderBy("timestamp", "desc"))
  );

  return (
    <div>
      {realtimePosts?.docs.map(post => {
        <Post 
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      })}    
    </div>
  )
}

export default Posts
