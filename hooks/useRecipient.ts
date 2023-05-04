import { AppUser } from "./../types/index";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { getRecipientEmail } from "./../utils/getRecipientEmail";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Conversation } from "@/types";
export const useRecipient = (conversationUsers: Conversation["users"]) => {
  const [loggedInUser, _loading, _error] = useAuthState(auth);
  // get recipient email
  const recipientEmail = getRecipientEmail(conversationUsers, loggedInUser);
  // get recipient avatar
  const queryGetRecipient = query(
    // ket qua la 1 snapshot
    collection(db, "users"),
    where("email", "==", recipientEmail)
  );
  const [recipientsSnapshot, __loading, __error] =
    useCollection(queryGetRecipient);
  // recipientSnapshot.docs could be an empty arr, leading to docs[0] being undefind
  // so we have to force "?" after docs[0] because there is no data() on "undefind"
  const recipient = recipientsSnapshot?.docs[0]?.data() as AppUser | undefined;
  // console.log(recipient);

  return { recipient, recipientEmail };
};
