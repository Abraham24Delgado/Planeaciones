"use client"
import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline"

export const FormCreatePlaneation = () => {
    return(
        <form>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">Selecciona el grado</label>
                    <div className="relative">
                        <select
                            id="grado"
                            name="gradoId"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            aria-describedby='customer-error'
                            >
                            <option value="" disabled>Selecciona el grado</option>
                            <option value="" >Primer grado</option>
                            <option value="" >Segundo grado</option>
                            <option value="" >Tercer grado</option>
                        </select>
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">Selecciona el Tema</label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="tema"
                                name="temaId"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                                >
                                <option value="" disabled>Selecciona el Tema</option>
                                <option value="1" >Colores</option>
                                <option value="2" >Numeros</option>
                                <option value="3" >Letras</option>

                            </select>
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">Selecciona el Periodo</label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="periodo"
                                name="periodoId"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                                >
                                <option value="" disabled>
                                    Selecciona el Periodo
                                </option>
                                <option value="1">
                                    Semanal
                                </option>
                                <option value="2">
                                    Quincenal                                </option>
                            </select>
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link 
                    href="/dashboard/planeaciones" className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                        Cancel
                </Link>
                <button className="max-w-40 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-400 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800" type="submit">
                    Crear Planeacion
                </button>
            </div>
        </form>
    )
}