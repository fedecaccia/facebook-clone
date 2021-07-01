import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

const Home = ({ session, posts }) => {
  if (!session) return <Login />;
  
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header username={session.user.name} />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        <Feed posts={posts}/>
        <Widgets />
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }));

  console.log("session");
  console.log(session);

  return {
    props: {
      session,
      posts: docs,
    },
  };
};

export default Home;
