
import Resources from '@/app/ui/recursos/resources';
import { Suspense } from 'react';
import fs from 'fs'
import path from 'path';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';



export default async function Page(){
    // Definir la carpeta donde se encuentran los archivos PDF
    const pdfDirectory = path.join(process.cwd(), 'public/resources');
    
    let pdfFiles: string[] = [];
    try {
        const filenames = fs.readdirSync(pdfDirectory);
        pdfFiles = filenames.filter((file) => file.endsWith('.pdf'));
    } catch (error) {
        console.error('Error al leer los archivos PDF:', error);
    }

    return (
        <main>
            <h1 className ="mb-4 text-xl md:text-2xl">
                Pagina de Recursos
            </h1>
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton/>}>
                <CardWrapper />
                </Suspense>
            </div> */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <Resources pdfFiles={pdfFiles} />
                </Suspense>
            </div>
            </main>
    
    );
}
