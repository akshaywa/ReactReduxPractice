import React from 'react';
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const AuthGuard: React.FC = () => {
    const { jwtToken } = useSelector((state: any) => state.global);
    return jwtToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default React.memo(AuthGuard);
