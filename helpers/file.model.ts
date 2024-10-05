import { UserModel } from "./user.model";

export type FileModel = {
  id: string;
  nom: string;
  path: string;
  downloadLink: string;
  createdBy: UserModel["id"];
  createdAt: Date;
};