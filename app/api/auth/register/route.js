import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export async function POST(request) { 
    const data = await request.json();
    // Desestructurar los datos que necesitas para insertar
    
    const { username, email, password } = data; // Asegúrate de que estos campos existan en el objeto `data`
    const passwordCrypt = await bcrypt.hash(password, 10);
    try {
        // Realizar la inserción en la base de datos
        await sql`
            INSERT INTO users (name, email, password)
            VALUES (${username}, ${email}, ${passwordCrypt}) 
        `;
        
        // Retornar una respuesta de éxito
        return NextResponse.json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error inserting user:", error);
        // Retornar una respuesta de error
        if (error.code === '23505') {
            return NextResponse.json({ message: "Email or username already exists." }, { status: 409 });
        }
        return NextResponse.json({ message: "Failed to register user." }, { status: 500 });
    }
}