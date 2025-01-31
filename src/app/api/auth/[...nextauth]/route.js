// import NextAuth from "next-auth"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
          name: "Credentials",
          
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" },
            email: { label: "Email", type: "email" }
          },
          async authorize(credentials, req) {
            console.log('credentials ==>',credentials)
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if (user) {
                console.log("user =>",user)
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              
            }
          }
        })
      ]
}

const handler = NextAuth(authOptions)

  export { handler as GET, handler as POST }