import { FreelancerModel } from "./freelancer.model";

export enum TacheTag {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  IMPORTANT = "IMPORTANT",
}

export type TacheModel = {
  id: string;
  titre: string;
  description: string;
  createdAt: Date;
  assignTo: FreelancerModel["id"];
  tag: TacheTag;
};