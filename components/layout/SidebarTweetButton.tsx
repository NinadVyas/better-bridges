import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useRouter } from "next/router";


import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();


  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);


  

  return (
    <div onClick={onClick}>
      <div className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center 
        bg-green-500 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      ">
        <FaFeather size={24} color="white" />
      </div>
      <div className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      "> 
        <BsFillPlusSquareFill size={24} color="white" />
      <p className="hidden lg:block text-white text-xl">
        Post
      </p>  
        {/* <p 
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        ">
         
        </p> */}
      </div>
    </div>
  );
};

export default SidebarTweetButton;
