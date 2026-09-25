const Loading = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#0B0D0F]">
      <div className="text-center">
        <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-[#30353F] border-t-[#CCFF00]" />

        <p className="text-sm font-medium text-gray-400">
          Loading workouts…
        </p>
      </div>
    </main>
  );
};

export default Loading;