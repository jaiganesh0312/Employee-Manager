"use client";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";

import { logoutUser } from "@/lib/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/redux/slices/toastSlice";

import ProtectedRoute from "./ProtectedRoute";

export default function NavBarAvatar() {
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      const loggedOut = await dispatch(logoutUser()).unwrap(); // Wait for logout to complete
      console.log("Logged out successfully!!");

      dispatch(
        showToast({
          title: "Success!",
          description: "Logged out successfully!",
          type: "success",
        })
      );

      router.replace("/auth/login");
      console.log(loggedOut);
    } catch (error) {
      console.error("Logout Error", error);
    }
  }

  return (
    <ProtectedRoute>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" as='button' onPress={handleLogout} className="text-left">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ProtectedRoute>
  );
}
