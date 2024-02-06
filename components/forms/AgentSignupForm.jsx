"use client";

import React, { useState } from "react";
import { z } from "zod";
import TermsCheckbox from "@components/ui/TermsCheckbox";
import CircularProgress from "@mui/material/CircularProgress";

// Define the Zod schema
const agentSignupSchema = z.object({
  agency_name: z.string().min(1, "Agency name is required."),
  agent_first_name: z.string().min(1, "Agent first name is required."),
  agent_second_name: z.string().min(1, "Agent second name is required."),
  agent_email: z.string().email("Invalid email address."),
  agent_mobile: z.string().min(1, "Mobile number is required."),
  agent_webPageURL: z.string().url("Invalid URL.").optional(), // Optional if the website is not required
  agent_organization: z.string().min(1, "Organization is required."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

const AgentSignupForm = () => {
  const [formValues, setFormValues] = useState({
    agency_name: "",
    agent_first_name: "",
    agent_second_name: "",
    agent_email: "",
    agent_mobile: "",
    agent_webPageURL: "",
    agent_organization: "",
    password: "",
    role: "2",
  });
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleTermsChange = (event) => {
    setIsTermsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      // Validate form data with Zod
      agentSignupSchema.parse(formValues);
      setErrors({}); // Clear any previous errors
      console.log("Form data is valid. Submitting form...");
      setIsLoading(true);
      // Here you would typically make an API call
      setTimeout(() => setIsLoading(false), 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <section
      className="contact-panel lg:mx-auto w-screen flex justify-center items-center max-w-[1024px]"
      id="contact-panel"
    >
      <div className="py-[6%] px-[1.87rem] flex flex-col gap-[8px] w-full">
        <h3 className="pb-[0.9rem] font-bold text-[35px] text-left">
          Agent Sign Up
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-[0.6rem]">
            <div className="w-full">
              <label htmlFor="agency_name">Agency Name</label>
              <input
                id="agency_name"
                value={formValues.agency_name}
                onChange={handleInputChange}
                type="text"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                required
              />
            </div>
            <div className="w-full grid md:grid-rows-2 md:grid-cols-2 gap-4 grid-cols-1 ">
              <div>
                <label htmlFor="agent_first_name">Agent First Name</label>
                <input
                  id="agent_first_name"
                  type="text"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={formValues.agent_first_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="second-name_agent">Agent Second Name</label>
                <input
                  id="agent_second_name"
                  type="text"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={formValues.agent_second_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="agent_email">Email</label>
                <input
                  id="agent_email"
                  type="email"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={formValues.agent_email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="agent_mobile">Mobile</label>
                <input
                  id="agent_mobile"
                  type="text"
                  className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                  value={formValues.agent_mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="agent_webPageURL">Web Site</label>
              <input
                id="agent_webPageURL"
                type="url"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                value={formValues.agent_webPageURL}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="agent_organization">
                The professional organization to which Agency holds membership
              </label>
              <input
                id="agent_organization"
                type="text"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                value={formValues.agent_organization}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem]"
                value={formValues.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <TermsCheckbox
            isTermsChecked={isTermsChecked}
            handleTermsChange={handleTermsChange}
          />
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

export default AgentSignupForm;
