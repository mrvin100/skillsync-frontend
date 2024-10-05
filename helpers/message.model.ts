import { ConversationModel } from "./conversation.model";
import { UserModel } from "./user.model";

export type MessageModel = {
  id: string;
  conversation: ConversationModel["id"];
  sender: UserModel["id"];
  content: string;
  createdAt: Date;
};
