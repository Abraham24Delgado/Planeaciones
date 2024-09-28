import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  //import { fetchCardData } from '@/app/lib/data';
  import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
  
  const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };
  
  export default async function CardWrapper() {
    // const{
    //   numberOfCustomers, numberOfInvoices,totalPaidInvoices,totalPendingInvoices
    // } = await fetchCardData();
    return (
      <>
        {/* NOTE: Uncomment this code in Chapter 9 */}
  
        <Card 
        title="Eduplanner" 
        content={
          <>
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900 h-full flex flex-col">
            <figure className="max-w-screen-md mx-auto text-center pb-2">
                <svg className="w-6 h-6 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Paulo Freire</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Pedagogo,educador y filosofo</cite>
                    </div>
                </figcaption>
            </figure>
            <div className='flex justify-end '>
            <Link href="/dashboard/planeaciones" className="max-w-40 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-400 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800 mt-auto">
              Ver todos
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link> 
            </div>
          </div>
          </>
        } bgColor='bg-white' />
        <Card
        title="Calendario"
        content={
          <>
            <div className="p-6 bg-blue-500  rounded-lg dark:bg-blue-950 dark:border-none shadow-lg h-full">
              <img src="/calendario.jpg" alt="Calendario" className="mx-auto mb-4 w-32 h-32 border-pru" />
              <div className='flex justify-end'>
              <button className="mt-4 rounded bg-white px-4 py-2 text-black text-sm font-medium text-center hover:bg-gray-300">
                Ver Calendario
              </button>
              </div>
            </div>
          </>
        }
        bgColor="bg-blue-200"
      />
        
      </>
    );
  }
  
  export function Card({
    title,
    content,
    bgColor,
  }: {
    title: string;
    content: JSX.Element;
    bgColor: string;
  }) {
    //const Icon = iconMap[type];
  
    return (
      <div className="text-gray-700">
        {content} {/* Renderiza el contenido dinámico aquí */}
      </div>
    );
  }
  