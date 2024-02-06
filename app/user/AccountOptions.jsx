const AccountOptions = () => {
  return (
    <div
      className="user-account-card-options flex justify-start items-center text-semibold text-[10px] bg-white rounded-[5px] gap-2 shadow-2xl shadow-[#D9D9D9]"
      id="account-options"
    >
      <button className="p-6 account-detail-button">Account</button>
      <button className="p-6 booking-history-button">Booking History</button>
    </div>
  );
};
export default AccountOptions;
