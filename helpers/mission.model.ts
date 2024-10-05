import { CategorieModel } from "./categorie.model";
import { FreelancerModel } from "./freelancer.model";

export enum MissionStatus {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

export type MissionModel = {
  id: string;
  titre: string;
  description: string;
  budget: string;
  status: MissionStatus;
  createdAt: Date;
  categorie: CategorieModel["id"];
  candidates: FreelancerModel["id"][];
  attribuer: FreelancerModel["id"];
};