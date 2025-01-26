import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";
  
  import { deleteData } from "@/util/actions";
import { redirect } from "next/navigation";
  export default function DeleteModal({id, handleAlert, isDisabled}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    async function deleteEmployee(){
        const employee = await deleteData(id);
        if(employee){
            handleAlert({
                visible: true,
                message: "Employee Deleted Successfully!"
            })
            onOpenChange(isOpen => !isOpen);
            setTimeout(() => {
                handleAlert({visible: false});
                redirect("/");
            }, 800);
            
        }
    }
    return (
      <>
        <Button onPress={onOpen} color="danger" isDisabled={isDisabled}>Delete</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Confirm Deletion</ModalHeader>
                <ModalBody>
                  <p>
                    Are you sure you want to delete this item? 
                    <br />
                    This action cannot be undone.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="danger" onPress={deleteEmployee} >
                    Delete
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  