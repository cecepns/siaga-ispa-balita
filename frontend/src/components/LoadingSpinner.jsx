export default function LoadingSpinner({ text = 'Memuat data...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
