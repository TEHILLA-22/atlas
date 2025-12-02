export function Button({ children, className = "", variant, ...props }: any) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition-all";

  const styles =
    variant === "outline"
      ? "border bg-transparent"
      : "bg-[#1D4ED8] text-white";

  return (
    <button
      {...props}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
