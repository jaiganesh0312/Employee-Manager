"use client";
import React, { useState } from "react";
import { Form, Input, Button, Divider } from "@heroui/react";
import Link from "next/link";
import { showToast } from "../lib/redux/slices/toastSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { AcmeLogo } from "./NavBar";

import { Icon } from "@iconify/react";
import PasswordInput from "./PasswordInput";

import {
  signup,
  loginUser as login,
  forgotPassword,
  resetPassword,
} from "@/lib/actions/auth";

export default function AuthForm({ authType, token }) {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    title,
    inputFields,
    passwordFields,
    submitText,
    footerLinks,
    action,
    successMessage,
    redirectPath,
  } = getFormConfig(authType);

  const mutation = useMutation({
    mutationFn: (formData) =>  authType === 'login' ? dispatch(action(formData)).unwrap() : action(formData, token),
    onSuccess: () => {
      dispatch(showToast({
        title: "Success!",
        description: successMessage,
        type: "success",
      }));
      router.push(redirectPath);
    },
    onError: (error) => {
      if(authType === 'login'){
        error.details = JSON.parse(error.message);
      }
      if (error.name === "Validation failed") {
        setErrors(error.details);
        dispatch(showToast({
          title: "Validation Error!",
          description: "Action failed!",
          type: "danger",
        }));
      } else {
        dispatch(showToast({
          title: "Error!",
          description: error.message,
          type: "danger",
        }));
      }
    }
  });


  const validateForm = (formData) => {
    const newErrors = {};

    inputFields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    passwordFields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (authType === "signup") {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.currentTarget));
    if (!validateForm(formData)) {
      dispatch(
        showToast({
          title: "Validation Error",
          description: "Please fill in all required fields",
          type: "danger",
        })
      );
      return;
    }

    mutation.mutate(formData);
    
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full shadow-md max-w-md px-10 py-4 flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
          <p className="pb-1"> <AcmeLogo /> </p>
          <p className="text-3xl font-medium pb-1">{title}</p>
          <p className="text-small text-default-500 pb-1">
            Please Enter your details to continue
          </p>
        </div>
        <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {inputFields.map((field) => (
            <Input
              key={field.name}
              isInvalid={errors[field.name]}
              isRequired={field.required}
              errorMessage={errors[field.name]}
              label={field.label}
              labelPlacement="outside"
              name={field.name}
              placeholder={`Enter your ${field.label}`}
              type={field.type}
              variant="bordered"
            />
          ))}

          {passwordFields.map((field) => (
            <PasswordInput
              key={field.name}
              label={field.label}
              name={field.name}
              isInvalid={errors[field.name]}
            />
          ))}

          <div className="flex w-full items-center justify-between px-1 py-2">
            <div className="flex gap-2">
              <Button color="primary" type="submit" isDisabled={mutation.isPending} isLoading={mutation.isPending}>
                {mutation.isPending ? "Loading..." : submitText}
              </Button>
              <Button type="reset" variant="flat" isDisabled={mutation.isPending}>
                Reset
              </Button>
            </div>
            {authType === "login" && (
              <Link href="/auth/forgot-password" className="text-primary">
                Forgot password?
              </Link>
            )}
          </div>
        </Form>

        {(authType === "signup" || authType === "login") && (
          <>
            <div className="flex items-center gap-4 py-2">
              <Divider className="flex-1" />
              <p className="shrink-0 text-tiny text-default-500">OR</p>
              <Divider className="flex-1" />
            </div>
            <div className="flex flex-col gap-2">
              <Button
                startContent={
                  <Icon icon="flat-color-icons:google" width={24} />
                }
                variant="bordered"
              >
                {authType === "login" ? "Continue" : "Sign Up"} with Google
              </Button>
              <Button
                startContent={
                  <Icon
                    className="text-default-500"
                    icon="fe:github"
                    width={24}
                  />
                }
                variant="bordered"
              >
                {authType === "login" ? "Continue" : "Sign Up"} with Github
              </Button>
            </div>
          </>
        )}

        {footerLinks.map((footer) => (
          <p className="text-center" key={footer.href}>
            {footer.text}{" "}
            <Link href={footer.href} className="text-primary">
              {" "}
              {footer.linkText}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}

const getFormConfig = (authType) => {
  const config = {
    title: "",
    inputFields: [],
    passwordFields: [],
    secondaryAction: null,
    submitText: "",
    footerLinks: [],
    action: null,
  };

  switch (authType) {
    case "login":
      return {
        title: "Welcome Back",
        inputFields: [
          { name: "email", type: "email", label: "Email", required: true },
        ],
        passwordFields: [
          {
            name: "password",
            type: "password",
            label: "Password",
            required: true,
          },
        ],
        submitText: "Sign In",
        footerLinks: [
          {
            href: "/auth/signup",
            text: "Need to create an account?",
            linkText: "Sign Up",
          },
          //{ href: "/auth/forgot-password", text: "Forgot Password?" },
        ],
        action: login,
        successMessage: "Logged in successfully!",
        redirectPath: "/employees",
      };
    case "signup":
      return {
        title: "Create Account",
        inputFields: [
          { name: "username", type: "text", label: "Name", required: true },
          { name: "email", type: "email", label: "Email", required: true },
        ],
        passwordFields: [
          {
            name: "password",
            type: "password",
            label: "Password",
            required: true,
          },
          {
            name: "confirmPassword",
            type: "password",
            label: "Confirm Password",
            required: true,
          },
        ],
        submitText: "Sign Up",
        footerLinks: [
          {
            href: "/auth/login",
            text: "Already have an account?",
            linkText: "Log In",
          },
        ],
        action: signup,
        successMessage: "User created! Verification link sent.",
        redirectPath: "/auth/login",
      };
    case "forgot-password":
      return {
        title: "Forgot Password",
        inputFields: [
          { name: "email", type: "email", label: "Email", required: true },
        ],
        passwordFields: [],
        submitText: "Send Reset Link",
        footerLinks: [
          {
            href: "/auth/login",
            text: "Remember your password?",
            linkText: "Log In",
          },
        ],
        action: forgotPassword,
        successMessage: "Reset link sent to email!",
        redirectPath: "/auth/login",
      };
    case "reset-password":
      return {
        title: "Reset Password",
        inputFields: [],
        passwordFields: [
          {
            name: "newPassword",
            type: "password",
            label: "New Password",
            required: true,
          },
        ],
        submitText: "Reset Password",
        footerLinks: [],
        action: resetPassword,
        successMessage: "Password Reset Successful!",
        redirectPath: "/auth/login",
      };
    default:
      return config;
  }
};

// try {
//   let response  = null;
//   if(authType === "login"){
//   response = await dispatch(action(formData)).unwrap();
//   }else{
//     response = await action(formData, token);
//   }
//   console.log("Form Response", response);
//   if (response?.isInvalid || response?.payload?.isInvalid) {
//     setErrors(response.details || response?.payload?.details || {});
//     dispatch(
//       showToast({
//         title: "Validation Error!",
//         description: "Action Failed!!",
//         type: "danger",
//       })
//     );
//     return;
//   }
//   dispatch(
//     showToast({
//       title: "Success!",
//       description: successMessage,
//       type: "success",
//     })
//   );
//   router.push(redirectPath);
// } catch (error) {
//   console.error("Error in Form", error);
//   dispatch(
//     showToast({
//       title: "Error!",
//       description: error.message,
//       type: "danger",
//     })
//   );
// } finally {
//   setIsPending(false);
// }