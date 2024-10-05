import { UserModel } from "./user.model";
import { RatingModel } from "./rating.model";
import { CompetenceModel } from "./competence.model";
import { ExperienceModel } from "./experience.model";
import { CategorieModel } from "./categorie.model";

export type FreelancerModel = {
  id: string;
  userId: UserModel["id"];
  tarif: number;
  ratings: RatingModel["id"][];
  city: string;
  competences: CompetenceModel["id"][];
  experiences: ExperienceModel["id"][];
  categories: CategorieModel["id"][];
};