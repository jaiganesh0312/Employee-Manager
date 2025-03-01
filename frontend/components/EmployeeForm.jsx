"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Input, Button } from "@heroui/react";
import { showToast } from "../lib/redux/slices/toastSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { postData, putData } from "@/lib/actions/employee";
import DeleteModal from "./DeleteModal";
import { useState } from "react";


export default function EmployeeForm({ formType, id, ...props }) {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { title, inputFields, action, successMessage } = getFormConfig(formType);

  const mutation = useMutation({
    mutationFn: (formData) => action(formData, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
      dispatch(showToast({
        title: "Success!",
        description: successMessage,
        type: "success",
      }));
    router.push("/employees");
    },
    onError: (error) => {
      console.log("My Employee Form error:", error.details);
      if (error.name === "Validation failed") {
        setErrors(error.details);
        dispatch(showToast({
          title: "Validation Error!",
          description: "Please fix the errors in the form",
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
      if (field.isRequired && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    
    if (!validateForm(formData)) {
      dispatch(showToast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        type: "danger",
      }));
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <Form
      className="w-2/5 m-auto flex flex-col gap-4 mt-4 border-2 bg-green-400 px-10 py-4 rounded-md"
      onSubmit={handleSubmit}
    >
      <p className="text-3xl m-auto">{title} User</p>
      {inputFields.map((field) => {
        console.log(field);
        return (
        <Input
          key={field.name}
          isRequired={field.isRequired}
          errorMessage={errors[field?.name] || `Please enter a valid ${field?.name}`}
          isInvalid={!!errors[field.name]}
          label={field.label}
          labelPlacement="outside"
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          defaultValue={props[field.name]}
        />
)})}
      
      <div className="flex justify-between items-center w-full">
        <div className="flex space-x-2">
          <Button
            color="primary"
            type="submit"
            isDisabled={mutation.isPending}
            isLoading={mutation.isPending}
          >
            {mutation.isLoading ? "Processing..." : "Submit"}
          </Button>
          <Button
            type="reset"
            variant="flat"
            color="default"
            className="text-black"
            isDisabled={mutation.isPending}
          >
            Reset
          </Button>
        </div>
        {formType === "Update" && (
          <DeleteModal id={id} isDisabled={mutation.isPending} />
        )}
      </div>
    </Form>
  );
}

// getFormConfig remains the same
const getFormConfig = (formType) => {
  const config = {
    title: formType,
    inputFields: [
      {
        name: "name",
        type: "text",
        label: "Name",
        placeholder: "Name",
        isRequired: true,
      },
      {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Email",
        isRequired: true,
      },
      {
        name: "role",
        type: "text",
        label: "Role",
        placeholder: "Role",
        isRequired: true,
      },
      {
        name: "salary",
        type: "text",
        label: "Salary",
        placeholder: "Salary",
        isRequired: true,
      },
      {
        name: "phone",
        type: "tel", // Changed from text to tel
        label: "Phone",
        placeholder: "Phone",
        isRequired: true,
      },
      {
        name: "location",
        type: "text",
        label: "Location",
        placeholder: "Location",
        isRequired: true,
      }
    ],
    action: formType === "Create" ? postData : putData,
    successMessage: `Employee ${formType}d successfully!`,
  };
  return config;
};
