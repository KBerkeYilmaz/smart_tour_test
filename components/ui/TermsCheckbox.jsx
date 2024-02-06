import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";

const TermsCheckbox = ({isTermsChecked, handleTermsChange}) => {

  return (
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
  );
};

export default TermsCheckbox;