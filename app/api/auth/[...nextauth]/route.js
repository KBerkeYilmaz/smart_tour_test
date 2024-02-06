import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const secret = process.env.NEXTAUTH_SECRET;

async function auth(req, res) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        authorize: async (credentials) => {
          const email = credentials.email;
          const password = credentials.password;
          console.log(email, password);
          // Your existing login logic here, adapted from the original function
          const response = await fetch(
            "https://www.gokamind.com/MedusaTurApi/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );

          if (!response.ok) {
            throw new Error("Authentication failed");
          }

          const user = await response.json();
          console.log("User:", user); // Debug log

          // If no error and we have user data, return it
          if (user) {
            return user; // The user object will be encoded in the JWT
          } else {
            return null;
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    callbacks: {
      async jwt({ token, user }) {
        console.log("JWT callback - user:", user);
        if (user) {
          token.id = user.data.id; // Correctly access the nested 'id'
          token.email = user.data.email; // Example of adding more user details to the token
          token.phone = user.data.phone_number; // Example of adding more user details to the token
          token.name = `${user.data.first_name} ${user.data.last_name}`; // Correct concatenation of name
          token.access_token = user.access_token; // Example of adding more user details to the token
        }
        console.log("JWT callback - token:", token);
        return token;
      },
      async session({ session, token }) {
        // Use the token to set custom session values or modify the session object
        session.user.id = token.id;
        session.user.email = token.email; // Add email to session
        session.user.phone = token.phone; // Add phone to session
        session.user.name = token.name; // Add name to session
        session.user.access_token = token.access_token; // Add access_token to session
        return session;
      },
    },
  });
}

export { auth as GET, auth as POST };
