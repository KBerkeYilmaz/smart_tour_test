"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const RatingBar = ({ rating }) => {
  const [value, setValue] = useState(0);

  return (
    <Box
      component="fieldset"
      mb={3}
      borderColor="transparent"
    >
      <Rating
        name="simple-controlled"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default RatingBar;
