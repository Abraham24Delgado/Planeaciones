
import { fetchFilesData } from '@/app/lib/data';
    
export default async function CardFiles(){
      const latestFiles = await fetchFilesData();

    // const{
    //     numberOfCustomers, numberOfInvoices,totalPaidInvoices,totalPendingInvoices
    //   } = await fetchCardData();
      return (
        <>
          {latestFiles.map(({ titulo, descripcion, url, tipo }, index) => (
            <Card key={index} title={titulo} value={descripcion} type={tipo} url={url} />
          ))}
        </>
      );
    }
    
    export function Card({
      title,
      value,
      type,
      url,
    }: {
      title: string;
      value: number | string;
      type: string;
      url: string
    }) {
      //const Icon = iconMap[type];
    const maxLength = 80;
    const iconSrc = type === 'pdf' ? '/icons/pdf3.png' : '/icons/pptx3.png';
    
      return (
        <div className="rounded-xl bg-white dark:bg-gray-900 dark:shadow-gray-800 p-2 dark:shadow-sm shadow-lg">
            <div className="flex justify-between p-2">
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
                {iconSrc && <img src={iconSrc} alt={`${type} icon`} className="w-10 h-10" />}
            </div>
            <div className="flex justify-between p-4">
            <p className={`pr-2 py-3 text-xs text-gray-500`} >
                {typeof value === 'string' && value.length > maxLength
                ? `${value.substring(0, maxLength)}...`
                : value}
            </p>
            <a href={url} target='_blank' className="max-w-40 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-400 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800 mt-auto">
                Abrir
            </a>    
        </div>  
        </div>
      );
    }
    