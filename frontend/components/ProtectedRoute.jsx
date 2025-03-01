"use client";

import { checkAuth } from "@/lib/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const router = useRouter();

  
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        // Dispatch and wait for the auth check to complete
        if(!loading)await dispatch(checkAuth()).unwrap();
      } catch (error) {
        router.replace("/auth/login");
      } 
    };
    verifyAuth();
  }, [dispatch, router]);

  if (!isAuthenticated ) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
