import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, User} from "@nextui-org/react";
import Link from "next/link";
const Employee = ({name, email, id, role}) => {
  return (
    <Link href={`/update/${id}`}>
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
        <p>
            {role} enthusiast. Eager to learn new technologies
        </p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="text-small text-default-500">
              Email: {email}
          </div>
        </CardFooter>
      </Card>
    </Link>

  );
}
export default Employee;

