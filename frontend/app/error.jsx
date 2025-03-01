"use client";

import ErrorPage from "@/components/ErrorPage";
export default function Error({ error }) {
  console.log(error);
  return (
    <ErrorPage
      message={error?.props || "An unexpected error occurred"}
    />
  );
}
