export const ROLE = {
    ADMIN: "admin",
    USER: "user"
}

export const DEFAULT_ADMIN = {
    FIRST_NAME: "romyk",
    LAST_NAME: "admin",
    EMAIL: "admin@gmail.com",
    PASSWORD: "123",
    CONFIRM_PASSWORD: "123",
    ROLE: ROLE.ADMIN,
    IS_DELETED: false,
    IS_ACTIVE: true,
    ID: crypto.randomUUID(),
    CREATEDATE: new Date().toLocaleString(),
    UPDATEDATE: new Date().toLocaleString(),
    DELETEDATE: new Date().toLocaleString(),
}