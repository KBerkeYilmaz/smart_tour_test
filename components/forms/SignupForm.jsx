"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // OnChange handlers for each input
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  // Form submission

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const requestBody = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      password: password,
      role: "3", // Default role set to "3"
    };

    try {
      const response = await fetch(
        "https://www.gokamind.com/MedusaTurApi/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Include other headers if necessary
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! Status: ${response.status}`
        );
      }

      console.log(data); // Process the response data as needed
      toast.success("Registration successful!"); // Display success toast
      router.push("/sign_in");

      // Additional success logic here, e.g., redirecting the user or updating the state
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message || "An error occurred");
      toast.error(error.message || "Registration failed!"); // Display error toast
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      className="contact-panel lg:px-[8.15rem] w-screen flex justify-center items-center max-w-[1024px]"
      id="contact-panel"
    >
      <div className="py-[6%] px-[1.87rem] flex flex-col gap-[8px] w-full">
        <h3 className="pb-[0.9rem] font-bold text-[35px] text-left">Sign Up</h3>
        <form
          id={"signup-form"}
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 gap-[0.6rem]">
            <div className="w-full grid grid-rows-2 grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  onChange={handleFirstNameChange}
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={firstName}
                  type="text"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="last_name">Second Name</label>
                <input
                  id="last_name"
                  onChange={handleLastNameChange}
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={lastName}
                  type="text"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  onChange={handleEmailChange}
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={email}
                  type="text"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone_number">Mobile</label>
                <input
                  id="phone_number"
                  onChange={handlePhoneNumberChange}
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={phoneNumber}
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={handlePasswordChange}
              className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
              value={password}
              type="password"
              min={6}
              required
            />
          </div>
          <div className="flex justify-start items-center my-[0.62rem]">
            <Checkbox
              className="-translate-x-3"
              sx={{
                "&.Mui-checked": {
                  color: "#52D3D8", // Color when checked
                },
              }}
              checked={isTermsChecked}
              onChange={handleTermsChange}
            />{" "}
            <p className="-translate-x-3">
              I agree to all the
              <Link
                href="/privacy_policy"
                className="text-primary cursor-pointer"
              >
                Terms and Privacy Policies.
              </Link>
            </p>
          </div>
          <div className="flex gap-2 pb-2">
            Are you an agent?
            <Link
              href="/sign_up/agent"
              className="cursor-pointer text-primary"
            >
              Click here
            </Link>
          </div>
          <button
            className="w-full bg-primary text-white h-[3.12rem] rounded-md"
            type="submit"
            disabled={isLoading || !isTermsChecked}
          >
            {isLoading ? <CircularProgress /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
