
export function LoadingSpinner({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div
        className={`animate-spin rounded-full border-t-2 border-finance-purple ${sizeClasses[size]}`}
      />
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-3">
        <LoadingSpinner size="large" />
        <p className="text-gray-500 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
