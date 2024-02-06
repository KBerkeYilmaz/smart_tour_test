"use client";

import { useSession } from "next-auth/react";


const AccountCardHeader = () => {
  const { data: session, status } = useSession();
  const userData = session?.user ?? {}; // Use optional chaining and nullish coalescing


  return (
    <div className="user-account-card-header h-fit flex flex-col w-full pt-8">
      <img
        src="/profil-bg.jpg"
        alt=""
        className="h-1/2 desktop:w-full"
      />
      <div
        className="flex flex-col justify-start items-center -translate-y-10 tablet:-translate-y-16 desktop:-translate-y-20 2xl:-translate-y-24 text-[0.8rem] text-white h-1/2"
        id="user-account-avatar-info"
      >
        <img
          src="avatar1.svg"
          alt=""
          className="w-20 tablet:w-28 desktop:w-40 2xl:w-52"
        />
        <h1>{userData.name}</h1>
        <span>{userData.email}</span>
      </div>
    </div>
  );
};

export default AccountCardHeader;
