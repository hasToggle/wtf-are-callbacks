import clsx from 'clsx'

export const SkeletonCode = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className={clsx('rounded-2xl bg-gray-900/80 p-4', {
      'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
        isLoading,
    })}
  >
    <div className="space-y-3">
      <div className="h-6 w-6/12 rounded-lg bg-gray-700" />
      <div className="h-6 w-9/12 rounded-lg bg-gray-700" />
      <div className="h-6 w-3/12 rounded-lg bg-gray-700" />
      <div className="h-6 w-3/12 rounded-lg bg-gray-700" />
      <div className="h-6 w-9/12 rounded-lg bg-gray-700" />
      <div className="w-12/12 h-6 rounded-lg bg-gray-700" />
      <div className="h-6 w-2/12 rounded-lg bg-gray-700" />
      <div className="h-6 w-4/12 rounded-lg bg-gray-700" />
      <div className="h-6 w-3/12 rounded-lg bg-gray-700" />
    </div>
  </div>
)

export const SkeletonGetSum = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className={clsx('rounded-2xl bg-gray-900/80 p-4', {
      'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
        isLoading,
    })}
  >
    <div className="space-y-3">
      <div className="h-6 w-7/12 rounded-lg bg-gray-700" />
      <div className="h-6 w-4/12 rounded-lg bg-gray-700" />
      <div className="h-6 w-1/12 rounded-lg bg-gray-700" />
    </div>
  </div>
)
