"use client";
import AuthForm from "@/components/AuthForm";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
  const token = useSearchParams().get("token");

  return <AuthForm authType="reset-password" token={token} />;
}
