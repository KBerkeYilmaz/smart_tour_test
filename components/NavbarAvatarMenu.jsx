import * as React from "react";
import { Avatar, Menu, MenuItem, Stack } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function LetterAvatars({user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "https://localhost:3000/sign_in" });
  };

  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        H
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/user">Account Details</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/favorites">Favorites</Link>
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          className="bg-red-400 hover:bg-red-400"
        >
          {" "}
          {/* For Logout, handle separately */}
          Logout {/* Implement logout functionality here */}
        </MenuItem>
      </Menu>
    </Stack>
  );
}
