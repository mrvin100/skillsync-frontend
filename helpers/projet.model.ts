import { MissionModel } from "./mission.model";
import { FreelancerModel } from "./freelancer.model";
import { TacheModel } from "./tache.model";
import { CommentModel } from "./comment.model";

export enum ProjetStatus {
  PENDING = "PENDING",
  COMPLETE = "COMPLETE",
}

export type ProjetModel = {
  id: string;
  mission: MissionModel["id"];
  status: ProjetStatus;
  createdAt: Date;
  collaborators: FreelancerModel["id"][];
  taches: TacheModel["id"][];
  rating: number;
  comments: CommentModel["id"][];
};