
import { getById } from "@/util/actions";
import UserForm from "@/components/UserForm";
import { Avatar, Badge } from "@nextui-org/react";

export default async function UpdateUser({params}){
    const {id} = await params;
    const employee = await getById(id);

    if(employee === null){
        return <p className="text-2xl text-center">Invalid Employee ID</p>
    }
    
    return (
        <UserForm 
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