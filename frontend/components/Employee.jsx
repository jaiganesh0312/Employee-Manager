import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import DeleteModal from "./DeleteModal";

const Employee = ({ name, email, id, role }) => {
  return (
    <Card className="max-w-[340px]" key={id}>
      <CardHeader className="justify-between">
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={name}
          description={`id: ${id}`}
        />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{role} enthusiast. Eager to learn new technologies</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="text-small text-default-500">Email: {email}</div>
        <div className="flex gap-2 mt-2">
          {/* Update Button */}
          <Button
            color="primary"
            variant="flat"
            as={Link}
            href={`/employees/update/${id}`}
          >
            Update
          </Button>
          {/* Delete Button */}
          <DeleteModal id={id} />
        </div>
      </CardFooter>
    </Card>
  );
};
export default Employee;
