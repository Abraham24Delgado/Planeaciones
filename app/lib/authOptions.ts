// import { NextAuthConfig} from "next-auth";
// import type { User } from '@/app/lib/definitions';
// import { sql } from '@vercel/postgres';
// import bcrypt from 'bcrypt';
// import {z} from 'zod';
// import Credentials from "next-auth/providers/credentials";

// async function getUser(email: string): Promise<User | undefined> {
//     try {
//       const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//       return user.rows[0];
//     } catch (error) {
//       console.error('Failed to fetch user:', error);
//       throw new Error('Failed to fetch user.');
//     }
//   }
// export const authConfig: NextAuthConfig = {
//     providers: [ Credentials({
//         async authorize(credentials) {
//           const parsedCredentials = z
//             .object({ email: z.string().email(), password: z.string().min(6) })
//             .safeParse(credentials);
   
//           if (parsedCredentials.success) {
//             const { email, password } = parsedCredentials.data;
//             const user = await getUser(email);
//             if (!user) return null;
//             const passwordMatch = await bcrypt.compare(password, user.password);
//             if (passwordMatch)return user;
            
//           }
//           console.log('Invalid credential')
   
//           return null;
//         },
//       }),]
// }