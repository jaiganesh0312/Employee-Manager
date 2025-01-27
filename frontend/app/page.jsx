"use client";
import { Fragment, useEffect, useState } from "react";
import {Pagination, Button} from "@nextui-org/react";
import { fetchData} from "@/util/actions";
import Link from "next/link";


import Employee from "@/components/Employee";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(currentPage, keyword);
      setEmployees(data);
    }
    getData();
  }, [currentPage, keyword]);

  function handleOnChange(value){
    setKeyword(value);
    setCurrentPage(1);
  }
 
  return (
      <Fragment>
        <div className="flex justify-center gap-6">
          <SearchInput onValueChange={handleOnChange} isResettable={keyword !== ""}/>
          <Link href={"/create"}>
            <Button
            color="success"
            size="md"
            variant="shadow"
            className="text-lg"
            radius="sm"
            >
              Create
            </Button>
          </Link>
          
          
        </div>
        
        <div className="grid grid-cols-4 gap-8 p-2 mt-5">
          {
            employees === null || employees.data.length === 0 ?
            <p className="text-3xl text-center">No employees found.</p> :
            employees.data.map(({name, email, role, _id}) => (
              <Employee 
                key={_id}
                name={name}
                email={email}
                role={role}
                id={_id}
              />
            ))
          }
        </div>
        {employees && employees.data.length > 0 && employees.total > 10 &&
        <div className="flex gap-5 justify-center mt-6">
          {/* <p className="text-small text-default-500">Selected Page: {currentPage}</p> */}
          <Button
              color="secondary"
              size="md"
              variant="flat"
              onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
            >
              Previous
          </Button>
          <Pagination color="secondary" page={currentPage} total={Math.ceil(employees.total/12)} size='lg' onChange={setCurrentPage} />
          <Button
              color="secondary"
              size="md"
              variant="flat"
              onPress={() => setCurrentPage((prev) => (prev < Math.ceil(employees.total/12) ? prev + 1 : prev))}
            >
              Next
          </Button>
        </div>}
      </Fragment>
  );
}

