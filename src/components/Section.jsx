export default function Section({ title, children, link }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {link && <a href={link} className="text-sm text-gray-400 hover:underline">Show all</a>}
      </div>
      <div className="grid grid-flow-col auto-cols-[160px] gap-4 overflow-x-auto hide-scrollbar">
        {children}
      </div>
    </div>
  );
}
