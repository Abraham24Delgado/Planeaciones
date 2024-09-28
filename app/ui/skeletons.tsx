// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

  export function CardSkeleton() {
    return (
      <div
        className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 p-2 shadow-sm`}
      >
        <div className="flex justify-between p-2 ">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="ml-2 h-10 w-10 bg-gray-200 rounded-md dark:bg-gray-700 text-sm font-medium" />
        </div>
        <div className="flex justify-between p-4 ">
          <div className="space-y-1.5">
            <div className="flex items-center w-full">
                <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-1 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-1 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-1 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-1 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-1 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-1 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
          </div>
          <div className="ml-2 h-8 w-12 bg-gray-200 rounded-full dark:bg-gray-700 text-sm font-medium" />
        </div>
        
      </div>
    );
  }
  
  export function CardsSkeleton() {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }


  export function InvoiceSkeleton() {
    return (
      <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
          <div className="min-w-0">
            <div className="h-5 w-40 rounded-md bg-gray-200" />
            <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
          </div>
        </div>
        <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
      </div>
    );
  }

  export function LatestInvoicesSkeleton() {
    return (
      <div
        className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
      >
        <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
        <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
          <div className="bg-white px-6">
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
          </div>
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }