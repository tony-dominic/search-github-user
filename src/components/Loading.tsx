export const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="space-y-2 py-2 text-center">
        <div className="mx-auto mt-4 h-12 w-12 animate-spin rounded-full border-t-4 border-blue-600"></div>
      </div>
    </div>
  );
};
