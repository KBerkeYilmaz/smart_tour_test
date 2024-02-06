import { React } from "react";
import PricebarMenuRoot from "@components/ui/Pricebar/PricebarMenuRoot";
import BookingDetail from "./BookingPanel";
// import { unstable_setRequestLocale } from "next-intl/server";

const booking_detail = ({ params }) => {
  // unstable_setRequestLocale(locale);


  return (
    <main className="bg-[#F2F2F2] flex justify-center items-baseline w-screen py-16 relative">
      {/* <!-- DETAILS CONTAINER --> */}
      <BookingDetail />
      {/* {/* <!-- DETAILS CONTAINER END --> */}
      <PricebarMenuRoot />

      {/* <!-- SIDEBAR END --> */}
    </main>
  );
};

export default booking_detail;
