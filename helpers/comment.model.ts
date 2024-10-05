import { UserModel } from "./user.model";
import { ProjetModel } from "./projet.model";
import { FormationModel } from "./formation.model";

export enum CommentTag {
  BAD = "BAD",
  AVERAGE = "AVERAGE",
  GOOD = "GOOD",
}

export type CommentModel = {
  id: string;
  content: string;
  client: UserModel["id"];
  project: ProjetModel["id"];
  formation: FormationModel["id"];
  tag: CommentTag;
  createdAt: Date;
};