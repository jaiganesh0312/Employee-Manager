// app/not-found.jsx
"use client";
import {Button} from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-10">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl text-default-600 mb-8">
        The employee you are looking for does not exist
      </p>

      <Button as={Link} href="/" color="primary" size="md">
        Return to Homepage
      </Button>
    </div>
  );
}

