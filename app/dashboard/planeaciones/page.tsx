import Link from "next/link"
export default function Page(){
    return(

        <div className="w-full p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
            <div className='flex justify-end '>
                <Link href="/dashboard/planeaciones/create" className="max-w-40 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-400 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
                Crear Planeación
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </Link> 
            </div>
        </div>
    )
}