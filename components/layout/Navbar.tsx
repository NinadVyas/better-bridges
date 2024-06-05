import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill, BsFillCalendarEventFill } from 'react-icons/bs';
import { FaUser, FaShoppingCart, FaGlobeAfrica } from 'react-icons/fa';
import useCurrentUser from '@/hooks/useCurrentUser';
import SidebarLogo from './SidebarLogo';
import { BsDot } from 'react-icons/bs';
import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { data: currentUser } = useCurrentUser();
  const [redirect, setRedirect] = useState(null);
  const loginModal = useLoginModal();
  const router = useRouter();
  const handleItemClick = useCallback(
    (href: string) => {
      if (currentUser) {
        router.push(href);
      } else {
        loginModal.onOpen();
      }
    },
    [currentUser, router, loginModal]
  );

  // const handleLogout = () => {
  //   signOut({ redirect: '/' });
  // };

  return (
    <div className="flex flex-row justify-between items-center px-4 py-2 bg-black">
      <div className="flex flex-row items-center gap-4">
        <SidebarLogo />
        {currentUser && (
          <>
            {[
              // {
              //   icon: BsHouseFill,
              //   label: 'Home',
              //   href: '/',
              // },
              {
                icon: FaUser,
                // label: 'Profile',
                href: `/users/${currentUser?.id}`,
                auth: true,
              },
              {
                icon: BsBellFill,
                // label: 'Notifications',
                href: '/notifications',
                auth: true,
                alert: currentUser?.hasNotification,
              },
            ].map((item) => (
              <div
                key={item.href}
                className="flex flex-row items-center gap-4 cursor-pointer"
                onClick={() => handleItemClick(item.href)}
              >
                <div className="relative rounded-full h-10 w-14 flex items-center justify-center">
                  {React.createElement(item.icon, { size: 24, color: 'white' })}
                  {item.alert ? (
                    <BsDot className="text-green-500 absolute -top-4 left-1" size={65} />
                  ) : null}
                </div>
                {/* <p className="text-white text-sm">{item.label}</p> */}
              </div>
            ))}
          </>
        )}
      </div>
                  {currentUser && (
                    <div onClick={() => signOut()} className=' cursor-pointer'>
                      <BiLogOut size={24} color="white" />
                    </div>
                  )}
      {redirect && (
        <Link href='/'>
          <a>
            <p className="text-white text-sm">{redirect}</p>
          </a>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
