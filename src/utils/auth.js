import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import LinkdinProvider from 'next-auth/providers/linkedin';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    LinkdinProvider({
      clientId: process.env.LINKDIN_ID,
      clientSecret: process.env.LINKDIN_SECRET,
    }),
  ],
};