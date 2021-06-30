import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const Home = ({ session }) => {
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
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log("session");
  console.log(session);

  return {
    props: {
      session,
    },
  };
};

export default Home;
