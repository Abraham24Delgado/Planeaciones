import { ArrowPathIcon, FolderArrowDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';



interface ResourcesProps {
  pdfFiles: string[];
}
export default function Resources({ pdfFiles} : ResourcesProps) {
  return (
      
    <div className="flex w-full flex-col md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {pdfFiles.length > 0 ? (
            pdfFiles.map((file, i) => {
              return (
                <div
                  key={i}
                  className={clsx(
                    'flex flex-row items-center justify-between py-4 px-6',
                    {
                      'border-t': i !== 0,
                    }, 
                  )}
                >
                  <div className="flex items-center">
                    <FolderArrowDownIcon className='h-6 w-6 text-secondary-600 mr-4'/>
                    <p className="truncate text-sm font-semibold md:text-base">
                      {file}
                    </p>
                  </div>
                  <Link href={`/resources/${file}`}
                    className="text-sm font-medium md:text-base text-secondary-600 hover:text-secondary-800"
                    target="_blank">
                      Abrir PDF
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No hay archivos PDF disponibles.</p>
          )}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Última actualización</h3>
        </div>
      </div>
    </div>
  );
}