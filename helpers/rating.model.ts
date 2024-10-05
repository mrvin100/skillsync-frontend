import { FreelancerModel } from "./freelancer.model";

export type RatingModel = {
  id: string;
  emitTo: FreelancerModel["id"];
  createdAt: Date;
};