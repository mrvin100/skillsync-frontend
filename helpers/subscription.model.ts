import { FormationModel } from "./formation.model";
import { UserModel } from "./user.model";

export type SubscriptionModel = {
  id: string;
  formation: FormationModel["id"];
  user: UserModel["id"];
  finished: boolean;
  createdAt: Date;
};
