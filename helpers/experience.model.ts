import { CompetenceModel } from "./competence.model";

export enum ExperienceType {
  REMOTE = "remote",
  IN_OFFICE = "in-office",
  HYBRID = "hybride",
}

export type ExperienceModel = {
  id: string;
  titre: string;
  description: string;
  periode: string;
  competences: CompetenceModel["id"][];
  type: ExperienceType;
  createdAt: Date;
};