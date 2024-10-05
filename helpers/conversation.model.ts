import { UserModel } from "./user.model";
import { MessageModel } from "./message.model";

export type ConversationModel = {
  id: string;
  users: UserModel["id"][];
  lastMessage: MessageModel["id"];
  createdAt: Date;
};