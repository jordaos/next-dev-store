import { Skeleton } from '@/components/skeleton'

export default function ProductLoading() {
  return (
    <div className="relative grid grid-cols-3 grid-rows-1">
      <Skeleton className="col-span-2 row-span-2 h-[600px]" />

      <div className="flex flex-col justify-center px-12">
        <Skeleton className="w-full h-[40px]" />
        <Skeleton className="mt-2 w-full h-[20px]" />
        <Skeleton className="mt-1 w-full h-[20px]" />

        <div className="mt-8 flex items-center gap-3">
          <Skeleton className="h-[45px] w-[85px] rounded-full" />
          <Skeleton className="h-[45px] flex-1 rounded" />
        </div>

        <div className="mt-8 space-y-4">
          <Skeleton className="w-[130px] h-[24px]" />

          <div className="flex gap-2">
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
          </div>
          <Skeleton className="mt-2 h-12 w-full rounded-full" />
        </div>
      </div>
    </div>
  )
}
