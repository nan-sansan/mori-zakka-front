import { UserProfile } from "@/type/user.d";
import { jwtDecode, JwtPayload } from "jwt-decode";

export const decodeJwt = (token: string) => {
  try {
    return jwtDecode<JwtPayload & UserProfile>(token);
  } catch (error) {
    console.error("Invalid JWT token", error);
    return null;
  }
};
