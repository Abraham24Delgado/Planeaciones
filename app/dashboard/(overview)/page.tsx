import { lusitana } from "@/app/ui/fonts"
import { Suspense } from "react"
import CardWrapper from "@/app/ui/dashboard/banner-planner"
import CardFiles from "@/app/ui/dashboard/card-files"
import { CardsSkeleton } from "@/app/ui/skeletons"
import LatestPlanneation from "@/app/ui/dashboard/latest-planeations"
import Link from "next/link"

export default function Page(){
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-[58%_42%] ">
                <Suspense fallback={<CardsSkeleton/>}>
                    <CardWrapper />
                </Suspense>
            </div>
            <p className="mt-8 mb-0 text-gray-600 text-lg">Ultimos cursos agregados</p>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2  ">
                <Suspense fallback={<CardsSkeleton/>}>
                    <CardFiles />
                </Suspense>
            </div>
            <div className="flex justify-end mt-1">
                <Link href="/dashboard/recursos" className="text-gray-600">Ver todos</Link>
            </div>
            <h1 className="mb-4 text-xl text-gray-600 md:text-lg">Ultimas planeaciones</h1>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1 rounded-xl ">
                <Suspense fallback={<CardsSkeleton/>}>
                    <LatestPlanneation />
                </Suspense>
            </div>
        </main>
    )
}
