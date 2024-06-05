import React from 'react';
import FollowBar from "@/components/layout/FollowBar"
import Navbar from './layout/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto w-full">
        <div className="">
          <Navbar/>
        
            {children}
          {/* <FollowBar /> */}
        </div>
     </div>
    </div>
  )
}

export default Layout;
