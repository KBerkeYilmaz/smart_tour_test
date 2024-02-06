"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Use Next-Auth's signIn function instead of fetch
    const result = await signIn("credentials", {
      redirect: false, // Prevent Next-Auth from redirecting automatically
      email,
      password,
    });

    if (result?.error) {
      // Handle errors (e.g., display a message to the user)
      toast.error(result.error || "Login failed!"); // Display error toast
    } else {
      // Successful login
      toast.success("Giriş başarılı", {
        position: "top-center", // Example position
        autoClose: 200, // Toast will close automatically after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
      }); // Display success toast

      setTimeout(() => {
        router.push("/user"); // Redirect to the user page
      }, 500); // Wait for 1 second before redirecting
    }
  };

  return (
    <form
      className="sign-in-form lg:px-[8.15rem]  w-screen flex justify-center items-center max-w-[1024px]"
      id="sign-in-form"
      onSubmit={handleSubmit}
    >
      <div className="py-[15%] px-[1.87rem] flex flex-col gap-[8px] w-full">
        <h3 className="pb-[0.9rem] font-bold text-[35px] text-left">Sign In</h3>

        <div className="grid grid-rows-2 grid-cols-1 gap-[0.6rem]">
          <div className="w-full">
            <label htmlFor="user-email">E-Mail</label>
            <input
              id="user-email"
              type="email"
              onChange={handleEmailChange}
              name="email"
              className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem] text-black"
            />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <input
              id="user-password"
              type="password"
              name="password"
              className="w-full rounded-md bg-input border border-[#BEBEBE] h-[40px] p-[0.75rem] text-black"
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-[0.62rem]">
          <button className="text-primary">
            <a href="forgot_password.html">Forgot Password?</a>
          </button>
        </div>

        <button
          id="form-submit-btn"
          className="form-submit-btn w-full bg-primary text-white h-[3.12rem] rounded-md"
          type="submit"
        >
          Send
        </button>

        <span>
          Don't have an account?{" "}
          <a
            href="/sign_up"
            className="text-primary"
          >
            Register
          </a>
        </span>
        <span>
          Don't have an agente account?{" "}
          <a
            href="agent_signUp.html"
            className="text-primary"
          >
            Register
          </a>
        </span>
      </div>
    </form>
  );
};

export default SigninForm;
