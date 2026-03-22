// import React from 'react'
// import { Navigate } from 'react-router';

// function PrivateRoot({children}) {
//     let role = localStorage.getItem("role");
//     if (!role || role !== "admin") {
//         return <Navigate to={"/"}/>
//     }else{
//         return children;
//     }

// }

// export default PrivateRoot
import { Navigate } from 'react-router';

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