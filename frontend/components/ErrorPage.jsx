
import { Button } from "@heroui/react";
import Link from "next/link";


export default function ErrorPage({ message }) {    
    // Handle different error formats
    const getSafeMessage = () => {
      try {
        if (message instanceof Error) return message.message;
        if (typeof message === 'object') return JSON.stringify(message);
        return message || "Oops. Something went wrong.";
      } catch {
        return "An unknown error occurred";
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center gap-10">
        <h1 className="text-6xl font-bold text-primary mb-4">Error Occurred!</h1>
        <p className="text-2xl text-default-600 mb-8 max-w-2xl">
          {getSafeMessage()}
        </p>
        <Button as={Link} href="/" color="primary" size="lg" css={{ mx: "auto" }}>
          Return to Homepage
        </Button>
      </div>
    );
  }