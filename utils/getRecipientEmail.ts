import { Conversation } from "@/types";
import { User } from "firebase/auth";
export const getRecipientEmail = (
  conversationUsers: Conversation["users"],
  loggedInUser?: User | null
) => {
  return conversationUsers?.find(
    (userEmail) => userEmail !== loggedInUser?.email
  );
};
