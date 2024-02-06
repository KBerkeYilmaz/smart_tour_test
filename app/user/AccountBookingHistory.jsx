const AccountBookingHistory = () => {
  return (
    <div class="user-account-card-header h-fit">
      <img
        src="/profil-bg.jpg"
        alt=""
        class="h-1/2 desktop:w-full"
      />
      <div
        class="text-black flex flex-col justify-start items-center -translate-y-10 tablet:-translate-y-16 desktop:-translate-y-20 2xl:-translate-y-24 text-[0.8rem]"
        id="user-account-avatar-info"
      >
        <img
          src="public/avatar1.svg"
          alt=""
          class="w-20 tablet:w-28 desktop:w-40 2xl:w-52"
        />
        <span>Mahmut Can</span>
        <span>test@gmail.com</span>
      </div>
    </div>
  );
};

export default AccountBookingHistory;