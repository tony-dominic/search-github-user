export const Error = ({ onSubmit }: { onSubmit?: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-red-500 bg-red-50 p-6 shadow-md">
      <div className="mb-4 text-4xl text-red-500">
        <span role="img" aria-label="sad face">
          😞
        </span>
      </div>
      <p className="mb-4 text-center text-xl text-gray-700">
        Oops! We couldn't find that user.
      </p>

      {onSubmit && (
        <button
          className="rounded-lg bg-red-500 px-6 py-3 text-white shadow-md hover:bg-red-600"
          onClick={onSubmit}
        >
          Try Again
        </button>
      )}
    </div>
  );
};
