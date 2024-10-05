import { UserModel } from "./user.model";
import { FormationModel } from "./formation.model";

export enum PaiementMethod {
  MM = "MM",
  BK = "BK",
  PPAL = "PPAL",
}

export type PaiementModel = {
  id: string;
  client: UserModel["id"];
  freelancer: UserModel["id"];
  formation: FormationModel["id"];
  montant: number;
  method: PaiementMethod;
  createdAt: Date;
};