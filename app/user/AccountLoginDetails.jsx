"use client";

import { useSession } from "next-auth/react";

const AccountLoginDetails = () => {
  const { data: session } = useSession();
  const userData = session.user;
  const userEmail = userData.email;
  const userPhone = userData.phone;

  return (
    <div
      className="user-account-login-detail rounded-[5px] px-6 py-8 bg-white w-full shadow-2xl shadow-[#D9D9D9]"
      id="user-account-login-detail"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-semibold">Login Details</h2>
          <span className="text-[0.7rem]">Basic info for bıdı bıdı</span>
        </div>
        <div className="flex">
          <img
            src="public/edit-btn.svg"
            alt=""
          />
          <span className="text-[0.7rem] text-primary">Edit Login</span>
        </div>
      </div>

      <div className="flex flex-col justify-start text-black">
        <div className="w-1/8 flex justify-between gap-3 border-b-2 py-2">
          <h3 className="font-light">Mobile Number</h3>
          <span>{userPhone}</span>
        </div>
        <div className="w-1/8 flex justify-between gap-3 border-b-2 py-2">
          <h3 className="font-light">E-Mail ID</h3>
          <span>{userEmail}</span>
        </div>
        <div className="w-1/8 flex justify-between gap-3 border-b-2 py-2">
          <h3 className="font-light">Password</h3>
          <span>13431415</span>
        </div>
      </div>
    </div>
  );
};

export default AccountLoginDetails;
