import AccountOptions from "./AccountOptions";
import AccountCardHeader from "./AccountCardHeader";
import AccountProfileDetail from "./AccountProfileDetail";
import AccountLoginDetails from "./AccountLoginDetails";

const AccountUser = () => {

  return (
    <div
      className="user-account-card flex flex-col gap-2 tablet:mx-4 desktop:mx-[150px] 2xl:mx-[250px] px-2 mb-8"
      id="user-account-card"
    >
      <AccountCardHeader />
      <AccountOptions />
      <AccountProfileDetail
      />
      <AccountLoginDetails
      />
    </div>
  );
};

export default AccountUser;
