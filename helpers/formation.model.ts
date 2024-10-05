import { CategorieModel } from "./categorie.model";
import { UserModel } from "./user.model";
import { CommentModel } from "./comment.model";
import { FileModel } from "./file.model";

export enum FormationFormat {
  VIDEO = "VIDEO",
  TEXT = "TEXT",
}

export type FormationModel = {
  id: string;
  titre: string;
  rating: number;
  description: string;
  categories: CategorieModel["id"][];
  duree: number;
  format: FormationFormat;
  files: FileModel["id"][];
  createdAt: Date;
  updatedAt: Date;
  createdBy: UserModel["id"];
  comments: CommentModel["id"][];
};