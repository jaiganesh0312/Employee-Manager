import ProtectedRoute from "@/components/ProtectedRoute";

export default function EmployeeLayout({children}){
    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    );
}