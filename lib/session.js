import { cookies } from "next/headers";

export async function getSessionData(req, res) {
  //   const encryptedSessionData = cookies().get('session')?.value
  //   return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
  const sessionCookie = cookies(req).get("session")?.value;
  const data = sessionCookie
    ? JSON.parse(decodeURIComponent(sessionCookie))
    : null;
  return data;
}
