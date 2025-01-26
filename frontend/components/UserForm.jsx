"use client"
import React, { useState } from "react";
import {Form, Input, Button} from "@nextui-org/react";
import { postData, putData } from "@/util/actions";
import { redirect } from "next/navigation";
import MyAlert from "./MyAlert";
import DeleteModal from "./DeleteModal";

export default function UserForm({formType, id, name, email, role, salary, location, phone}) {
  const [alert, setAlert] = useState({visible: false});
  function handleAlert(value){
    setAlert(value);
  }
  return (
    <Form
      className="w-2/5 m-auto flex flex-col gap-4 mt-4 border-2 bg-green-400 px-10 py-4 rounded-md"
      validationBehavior="native"
      onSubmit={async (event) => {
        event.preventDefault();
        let data = Object.fromEntries(new FormData(event.currentTarget));
        let employee = null;
        if(id){
          employee = await putData(data, id);
        }
        else {
          employee = await postData(data);
        }
        if(employee !== null){
          handleAlert({
            visible: true,
            message: id ? "Resource Updated Successfully!" : "Resource Created Successfully!"
          });
          setTimeout(() => {
            handleAlert({visible: false});
            redirect("/");
        }, 800);
        
        }
       
      }}
    >
      <MyAlert 
        color="success"
        variant="faded"
        title="Success!"
        description={alert.message}
        isVisible={alert.visible}
        handleAlert={handleAlert}
      />

      <p className="text-3xl m-auto">{formType} User</p>
      <Input
        isRequired
        errorMessage="Please enter a valid name"
        label="Name"
        labelPlacement="outside"
        name="name"
        placeholder="Name"
        type="text"
        defaultValue={name}
      />

      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Email"
        type="email"
        defaultValue={email}
      />

      <Input
        isRequired
        errorMessage="Please enter a valid role"
        label="Role"
        labelPlacement="outside"
        name="role"
        placeholder="Role"
        type="text"
        defaultValue={role}
      />

      <Input
        isRequired
        errorMessage="Please enter a valid salary"
        label="Salary"
        labelPlacement="outside"
        name="salary"
        placeholder="Salary"
        type="text"
        defaultValue={salary}
      />

      <Input
        isRequired
        errorMessage="Please enter a valid phone number"
        label="Phone No."
        labelPlacement="outside"
        name="phone"
        placeholder="Phone Number"
        type="text"
        defaultValue={phone}
      />

      <Input
        isRequired
        errorMessage="Please enter a valid location"
        label="Location"
        labelPlacement="outside"
        name="location"
        placeholder="Location"
        type="text"
        defaultValue={location}
      />


      <div className="flex justify-between items-center w-full">
        <div className="flex space-x-2">
          <Button color="primary" type="submit" isDisabled={alert.visible}>
            Submit
          </Button>
          <Button type="reset" variant="flat" color="default" className="text-black" isDisabled={alert.visible}>
            Reset
          </Button>
        </div>
        {formType === "Update" && 
          <DeleteModal 
            id={id}
            handleAlert={handleAlert}
            isDisabled={alert.visible}
          />
        }
      </div>
    </Form>
  );
}

