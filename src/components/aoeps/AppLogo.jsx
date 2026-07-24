// Placeholder en attendant le logo définitif de Sandra Mercier
export default function AppLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold">
        AO
      </div>
      <span className="text-sm font-semibold tracking-wide text-slate-700">
        AOEPS
      </span>
    </div>
  );
}
