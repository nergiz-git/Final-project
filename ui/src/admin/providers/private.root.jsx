import React from 'react'
import { Navigate } from 'react-router';

function PrivateRoot({children}) {
    let role = localStorage.getItem("role");
    if (!role || role !== "admin") {
        return <Navigate to={"/"}/>
    }else{
        return children;
    }

}

export default PrivateRoot