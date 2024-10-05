export enum UserRole {
    CLIENT = "Client",
    WORKER = "Worker",
    ADMIN = "Admin",
  }
  
  export type UserModel = {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
  };