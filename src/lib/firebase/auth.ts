import { getAuth } from "firebase/auth";
import { firebase } from ".";

export const auth = getAuth(firebase)