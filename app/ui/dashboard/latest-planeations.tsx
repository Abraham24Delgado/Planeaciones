export default function LatestPlanneation(){
    return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4 bg-white dark:bg-gray-900 ">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            
                            <th scope="col" className="px-6 py-3">
                                Tema
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Grado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Periodo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Salud
                            </th>
                            <td className="px-6 py-4">
                                Primer grado
                            </td>
                            <td className="px-6 py-4">
                                Quincenal
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-primary-400 dark:text-blue-500 hover:underline">Ver</a> / <a href="#" className="font-medium text-primary-400 dark:text-blue-500 hover:underline">Descargar</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Matematicas
                            </th>
                            <td className="px-6 py-4">
                                Segundo grado
                            </td>
                            <td className="px-6 py-4">
                                Semanal
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-primary-400 dark:text-blue-500 hover:underline">Ver</a> / <a href="#" className="font-medium text-primary-400 dark:text-blue-500 hover:underline">Descargar</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Geografia
                            </th>
                            <td className="px-6 py-4">
                                Tercer grado
                            </td>
                            <td className="px-6 py-4">
                                Mensual
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-primary-400 dark:text-blue-500 hover:underline">Ver</a> / <a href="#" className="font-medium text-primary-400 dark:text-blue-500 hover:underline">Descargar</a>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>    
    );
}