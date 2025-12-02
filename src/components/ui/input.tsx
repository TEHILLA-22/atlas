export function Input(props: any) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 rounded-lg bg-[#111] border border-[#1D4ED8] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${props.className}`}
    />
  );
}
