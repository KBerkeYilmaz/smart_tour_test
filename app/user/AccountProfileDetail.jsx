import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

const AccountProfileDetail = () => {
  const { data: session } = useSession();
  const userData = session?.user || {};
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: userData.name || "",
    email: userData.email || "",
    phone: userData.phone || "",
    // Add or modify fields as necessary
    role: "3", // Default role set to "3"
  });

  console.log("here is token", userData.access_token);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  console.log(session)

  const toggleEdit = () => setIsEditing(!isEditing);

  const updateUserProfile = async () => {
    // First, verify the token
    const verifyUrl = "https://www.gokamind.com/MedusaTurApi/verify";
    try {
      const verifyResponse = await fetch(verifyUrl, {
        method: "POST",
        headers: {
          "Authorization": `${userData.access_token}`, // Use your actual token variable
        },
      });
      console.log(userData.access_token)
  
      const verifyData = await verifyResponse.json();
      console.log(verifyData);
  
      // Check if verification was successful
      if (!verifyResponse.ok || verifyData.status === false) {
        throw new Error("Token verification failed");
      }
  
      // If token is verified successfully, proceed with updating the user profile
      const apiUrl = "https://www.gokamind.com/MedusaTurApi/user_general";
      const payload = {
        first_name: "Kutalmis Berke",
        last_name: "Yilmaz",
        email: "kberkeyilmaz@gmail.com",
        phone_number: "+5554432112",
        password: "123456",
        role: "3",
      };
      console.log("Updating user profile with payload:", payload);
  
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept-Language": "turkish,tr",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session.access_token}`, // Use your actual token variable
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log(data);
      toast.success("Profile updated successfully");
      setIsEditing(false); // Assuming you have this state to control editing mode
  
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to update profile");
    }
  };

    return (
    <div
      className="user-account-profile-detail rounded-[5px] px-6 py-8 bg-white w-full shadow-2xl shadow-[#D9D9D9] "
      id="user-account-profile-detail"
    >
      <div
        className="flex justify-between items-center "
        id="user-account-profile-detail-header"
      >
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-semibold">Profile</h2>
          <span className="text-[0.7rem]">
            Basic info for multiple purposes
          </span>
        </div>
        <div className="flex">
          <img
            src="edit-btn.svg"
            alt=""
          />
          <button
            onClick={toggleEdit}
            className="text-[0.7rem] text-primary"
          >
            Edit Profile
          </button>
          {isEditing && (
            <button
              onClick={updateUserProfile}
              className="text-[0.7rem] text-primary"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>

      <form action="">
        <ul
          className="flex flex-col justify-start text-slate-400 mt-4"
          id="user-account-details-list"
        >
          <li className="w-full flex justify-between border-b-2 py-2">
            <h3 className="font-light">Name</h3>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-style"
            />
          </li>
          <li className="w-full flex justify-between border-b-2 py-2">
            <h3 className="font-light">Email</h3>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-style"
            />
          </li>
          <li className="w-full flex justify-between border-b-2 py-2">
            <h3 className="font-light">Phone Number</h3>
            <input
              type="tel"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-style"
            />
          </li>
          <li className="w-full flex justify-between border-b-2 py-2">
            <h3 className="font-light">Address</h3>
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-style"
            />
          </li>
          <li className="w-full flex justify-between border-b-2 py-2">
            <h3 className="font-light">Date of Birth</h3>
            <input
              type="text"
              name="dob"
              value={userDetails.dob}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input-style"
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AccountProfileDetail;
