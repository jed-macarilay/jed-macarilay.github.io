export default function Badges({ techs }: { techs: any[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {techs.map((tech: string) => (
        <span
          key={tech}
          className="bg-gray-800 text-white text-sm font-medium px-3 py-1 rounded-full shadow hover:bg-gray-700 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}