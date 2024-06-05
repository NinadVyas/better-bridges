import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import Form from "@/components/Form";
import Image from 'next/image';
import { TableFooter } from "@mui/material";
import Footerimg from "@/components/Footerimg";
import useCurrentUser from '@/hooks/useCurrentUser';
import Footer from "@/components/Footer";
export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      {/* <Header label="Home" /> */}
      <div className='mt-6'></div>
      <Form placeholder="What's happening?" />
      {user ? <PostFeed /> : <Footerimg />}
      <Footer/>
      {/*<Image src="/bear.jpg" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 " width="2432" height="1442"/>*/}
    </>
  );
}
