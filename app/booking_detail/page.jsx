"use client";

import { React, useState } from "react";
import Stepper from "@components/ui/Stepper";
import SpecialRequest from "./SpecialRequests";
import GuestDetails from "./GuestDetails";
import LoginForm from "@components/forms/LoginForm";
import PricebarMenuRoot from "@components/ui/Pricebar/PricebarMenuRoot";
import PersonalizeOptions from "./PersonalizeOptions";
import TourInfoHeader from "./TourInfoHeader";
import TourInfoSub from "./TourInfoSub";

const BookingDetail = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepComponents = [
    <PersonalizeOptions key={0}/>,
    <SpecialRequest key={1}/>,
    <GuestDetails key={2}/>,
    <LoginForm key={3}/>,
  ];

  return (
    <main className="bg-[#F2F2F2] flex justify-center items-baseline w-screen py-16 relative">
      {/* <!-- DETAILS CONTAINER --> */}

      <div className="details-container flex flex-col lg:w-7/12 justify-start py-[1.25rem] px-4 bg-white max-h-[90%] min-h-fit overflow-y-auto ">
        <TourInfoHeader />

        <TourInfoSub />
        {/* <SpecialRequest />

        <GuestDetails />
        <LoginForm /> */}
        {stepComponents[activeStep]}

        <Stepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
      {/* {/* <!-- DETAILS CONTAINER END --> */}
      <PricebarMenuRoot />

      {/* <!-- SIDEBAR END --> */}
    </main>
  );
};

export default BookingDetail;
