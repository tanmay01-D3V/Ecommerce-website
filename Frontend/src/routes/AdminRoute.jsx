import ProtectedRoute from "./ProtectedRoute";

const AdminRoute = ({ isAdmin = true, children }) => {
  return (
    <ProtectedRoute isAllowed={isAdmin} redirectTo="/unauthorized">
      {children}
    </ProtectedRoute>
  );
};

export default AdminRoute;
