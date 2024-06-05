import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import Image from 'next/image'

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-20
        w-20
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-green-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">

 <Image
      src="/5.png"
      width={300}
      height={300}
      alt="Picture of the author"
    />      
    
    {/* <BsTwitter size={28} color="white" /> */}

    </div>
  );
};

export default SidebarLogo;
