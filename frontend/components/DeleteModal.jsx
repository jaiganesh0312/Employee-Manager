import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import { showToast } from "../lib/redux/slices/toastSlice";
import { resetSearch } from "@/lib/redux/slices/filterSearchSlice"
import { deleteData } from "@/lib/actions/employee";

export default function DeleteModal({ id }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => deleteData(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
      dispatch(
        showToast({
          title: "Success",
          description: "Employee deleted successfully",
          type: "success",
        })
      );
      dispatch(resetSearch());
      router.replace("/employees");
      onOpenChange(false);
    },
    onError: (error) => {
      dispatch(
        showToast({
          title: "Error",
          description: error.message || "Failed to delete employee",
          type: "danger",
        })
      );
    }
  });

  return (
    <>
      <Button
        onPress={onOpen}
        color="danger"
        isDisabled={mutation.isPending }
        isLoading={mutation.isPending}
      >
        {mutation.isPending ? "Deleting..." : "Delete"}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Deletion
              </ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to delete this item?
                  <br />
                  This action cannot be undone.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button 
                  color="default" 
                  variant="light" 
                  onPress={onClose}
                  isDisabled={mutation.isPending}
                >
                  Close
                </Button>
                <Button 
                  color="danger" 
                  onPress={() => mutation.mutate()}
                  isDisabled={mutation.isPending}
                >
                  {mutation.isPending ? "Deleting..." : "Delete"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}