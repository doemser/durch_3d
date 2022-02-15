import clientPromise from "../../../server/adapters/mongo";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
	//Configure the adapter
	adapter: MongoDBAdapter(clientPromise),
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	callbacks: {
		//Add the entire user to the session
		async session({ session, user }) {
			return { ...session, user };
		},
	},
});
