export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center bg-gray-900 p-10 rounded-2xl shadow-lg">
        
        {/* Tick Button */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Text */}
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          Payment Successful
        </h1>

        <p className="text-gray-400 mt-3 text-center">
          Your transaction has been completed successfully.
        </p>
      </div>
    </div>
  );
}
