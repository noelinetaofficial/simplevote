import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "67211296303-05uglf730ejb66j9ibod6444ermdt8ge.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    LinkedInProvider({
      clientId: "your_id", 
      clientSecret: "your_secret",
      client: { issuer: 'https://www.linkedin.com' },
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl; 
    },
    // 1. First, we add the role to the token
    async jwt({ token, user }) {
      if (user) {
        // REPLACE THIS with your actual email address
        if (user.email === "noelineta.official@gmail.com") {
          token.role = "admin";
        } else {
          token.role = "voter";
        }
      }
      return token;
    },
    // 2. Then, we pass the role and ID from the token to the session
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub; 
        session.user.role = token.role; // Now the frontend can see if you are an admin
      }
      return session;
    }
  },
  pages: {
    signIn: '/login', 
  },
  secret: "white_matrix_internship_test_secret_2026",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };