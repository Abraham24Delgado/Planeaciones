import { sql } from '@vercel/postgres';

// Archivo para hacer consultas a la base de datos 

export async function fetchFilesData() {
    try {
      
        const latestFileResource = sql`SELECT * FROM recursos ORDER BY id DESC LIMIT 4`;
        
        const rows = (await latestFileResource).rows || [];
        const latestFiles = rows.map(row => ({
            titulo: String(row.titulo || ''),
            descripcion: String(row.descripcion || ''),
            url: String(row.url || ''),
            tipo: String(row.tipo || ''),
        }));
        
        return latestFiles;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch latest files data.');
    }
  }