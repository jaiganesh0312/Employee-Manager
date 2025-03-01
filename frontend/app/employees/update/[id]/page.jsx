"use client";

import EmployeeForm from "@/components/EmployeeForm";
import { useQuery } from "@tanstack/react-query";
import { getById } from "@/lib/actions/employee";
import { useParams } from "next/navigation";
//import LoadingSkeleton from "@/components/LoadingSkeleton"; // Optional loading component

export default function UpdateEmployee() {
  const { id } = useParams();
  console.log("Id of employee:", id);
  const { data: employee, isLoading, isError, error } = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getById(id),
    retry: false,
  });

  if (isLoading) return <p className="text-2xl font-semibold text-center mt-6">loading...</p> ;
  
  if (isError) return (
    <div className="text-red-500 p-4">
      Error: {error.message || "Failed to load employee data"}
    </div>
  );

  console.log("Get by id", employee);

  if (!employee) return (
    <div className="p-4 text-center">
      Employee not found
    </div>
  );

  return (
    <EmployeeForm
      formType="Update"
      id={id}
      name={employee.name}
      role={employee.role}
      email={employee.email}
      phone={employee.phone}
      salary={employee.salary}
      location={employee.location}
    />
  );
}