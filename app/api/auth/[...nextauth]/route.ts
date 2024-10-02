import NextAuth from "next-auth"
import CredentialsProviders from "next-auth/providers/credentials"
import {z} from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { pages } from "next/dist/build/templates/app-page";
import { signIn } from "next-auth/react";
 

async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }

const authOptions = {
    providers: [
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@hotmail.com"},
                password: {label: "Password", type: "password", placeholder: "*****"},
            },
            async authorize(credentials) {
                const parsedCredentials = z
                  .object({ email: z.string().email(), password: z.string().min(6) })
                  .safeParse(credentials);
         
                if (parsedCredentials.success) {
                  const { email, password } = parsedCredentials.data;
                  const user = await getUser(email);
                  if (!user) throw new Error("El usuario no existe");
                  const passwordMatch = await bcrypt.compare(password, user.password);
                  if (passwordMatch){
                    return {
                      id: user.id,
                      name: user.name,
                      email: user.email,
                    }
                  }
                  else{
                    throw new Error("La contraseña es incorrecta")
                  }
                  
                }
                return null;
              },
              
        }),
    ],
    pages: {
      signIn: "/auth/login",
    }, 
    callbacks: {
      async redirect({ url, baseUrl }:{url: string; baseUrl: string}) {
        // Verifica si estás configurando redirecciones personalizadas
        if (url === '/api/auth/signin') {
          return '/dashboard';  // Cambia '/dashboard' por la ruta a la que quieres redirigir
        }
        return baseUrl; // o redirige a una página específica después del inicio de sesión
      },
    },
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}