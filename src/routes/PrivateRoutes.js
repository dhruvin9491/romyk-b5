import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getLoginCredential } from '../helpers/authHelper';
import { ROLE } from '../constants/commonConstants';

function PrivateRoutes({role}) {
    const credential = getLoginCredential();

    if (!credential) return <Navigate to={"/login"} replace />;

    if(!role.includes(credential.role)) return <Navigate to={credential.role === ROLE.ADMIN ? "/admin/dashboard": "/"} />;

    return <Outlet />;
}

export default PrivateRoutes;