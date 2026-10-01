import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DEFAULT_ADMIN, ROLE } from "../constants/commonConstants";

export const createAdmin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]").filter((u) => u.role !== ROLE.ADMIN);

    users.push({
        firstName: DEFAULT_ADMIN.FIRST_NAME,
        lastName: DEFAULT_ADMIN.LAST_NAME,
        email: DEFAULT_ADMIN.EMAIL,
        password: DEFAULT_ADMIN.PASSWORD,
        confirmPassword: DEFAULT_ADMIN.CONFIRM_PASSWORD,
        role: DEFAULT_ADMIN.ROLE,
        isDeleted: DEFAULT_ADMIN.IS_DELETED,
        isActive: DEFAULT_ADMIN.IS_ACTIVE,
        id: DEFAULT_ADMIN.ID,
        createdAt: DEFAULT_ADMIN.CREATEDATE,
        updatedAt: DEFAULT_ADMIN.UPDATEDATE,
        deletedAt: DEFAULT_ADMIN.DELETEDATE
    });

    localStorage.setItem("users", JSON.stringify(users));
}

export const getLoginCredential = () => {
    return JSON.parse(localStorage.getItem("login_credential"));
}
export const checkLoginStatus = () => {
    const credential = getLoginCredential();
    const status = credential &&
        typeof credential === "object" &&
        !Array.isArray(credential) &&
        Object.keys(credential).length > 0;

    return status;
}

export const logout = () => {
    localStorage.removeItem("login_credential");
    toast.success("Logout successfully");
}