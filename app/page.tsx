import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
export default function Page(){
    return (
            <section className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 dark:text-white h-screen content-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bienvenido a EduPlanner</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">La plataforma diseñada especialmente para ti. Aquí, tu misión de educar y motivar a tus estudiantes se convierte en una experiencia más enriquecedora y eficiente.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link
                        href="/auth/login"
                        className="flex items-center gap-5 self-start rounded-lg bg-primary-400 hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary-700 md:text-base"
                    >
                        <span>Iniciar sesion</span> <ArrowRightIcon className="w-5 md:w-6" />
                    </Link>
                        <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-white focus:outline-none bg-gray-700 rounded-lg border border-gray-200 hover:bg-gray-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-800">
                            Leer mas
                        </a>  
                    </div>
                </div>
            </section>
      );
}