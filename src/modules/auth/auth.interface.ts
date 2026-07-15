export interface auth {
    name: string;
    email: string;
    password: string;
    profilePhoto?: string;
    role: "Student" | "Developer" | "Admin";
    status: "ACTIVE" | "BLOCKED";
}

export interface ILoginUser  {
    email: string,
    password: string
}
