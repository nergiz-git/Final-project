
function PrivateRoot({ children }) {
    let role = localStorage.getItem("role");
    let adminId = localStorage.getItem("adminId");
    
    if (!role || role !== "admin" || !adminId) {
        return <Navigate to={"/"} />;
    } else {
        return children;
    }
}
export default PrivateRoot