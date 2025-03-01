// components/EmployeesList.js
"use client";
import { Fragment } from "react";
import { Pagination, Button } from "@heroui/react";
import { fetchData } from "@/lib/actions/employee";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  setKeyword,
  setCurrentPage,
} from "@/lib/redux/slices/filterSearchSlice";


import Employee from "@/components/Employee";
import SearchInput from "@/components/SearchInput";
import Error from "next/error";

export default function EmployeesList() {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.filterSearch.keyword);
  const currentPage = useSelector((state) => state.filterSearch.currentPage);

  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["employees", currentPage, keyword],
    queryFn: () => fetchData(currentPage, keyword),
    staleTime: 5 * 60 * 1000,
    cacheTime: 20 * 60 * 1000,
  });

  const handleSearchChange = (value) => {
    dispatch(setKeyword(value));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  if (isLoading)
    return (
      <p className="text-2xl font-semibold text-center mt-4">
        Loading employees...
      </p>
    );
  if (isError) throw new Error("Failed to load employees");

  return (
    <Fragment>
      <SearchInput
        keyword={keyword}
        onValueChange={handleSearchChange}
        isResettable={keyword !== ""}
      />

      {employees === null || employees.data.length === 0 ? (
        <p className="text-3xl text-center mt-10">No employees found.</p>
      ) : (
        <div className="grid grid-cols-4 gap-8 p-2 mt-2">
          {employees.data.map(({ name, email, role, id }) => (
            <Employee key={id} name={name} email={email} role={role} id={id} />
          ))}
        </div>
      )}

      {employees && employees.data.length > 0 && employees.total > 10 && (
        <div className="flex gap-5 justify-center mt-6 absolute bottom-0 left-1/3">
          <Button
            color="secondary"
            size="md"
            variant="flat"
            onPress={() => handlePageChange(Math.max(currentPage - 1, 1))}
          >
            Previous
          </Button>
          <Pagination
            color="secondary"
            page={currentPage}
            total={Math.ceil(employees.total / 12)}
            size="lg"
            onChange={handlePageChange}
          />
          <Button
            color="secondary"
            size="md"
            variant="flat"
            onPress={() =>
              handlePageChange(
                Math.min(currentPage + 1, Math.ceil(employees.total / 12))
              )
            }
          >
            Next
          </Button>
        </div>
      )}
    </Fragment>
  );
}
