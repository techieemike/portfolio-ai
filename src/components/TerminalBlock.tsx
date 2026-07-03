export default function TerminalBlock({
  lines,
}: {
  lines: { command: string; output: string }[];
}) {
  return (
    <div className="terminal-block max-w-lg">
      {lines.map((line, i) => (
        <div key={i} className="mb-1 last:mb-0">
          <span className="text-zinc-500">$ </span>
          <span className="text-emerald-400">{line.command}</span>
          {line.output && (
            <p className="text-zinc-300 ml-4 mt-0.5 whitespace-pre-line">{line.output}</p>
          )}
        </div>
      ))}
    </div>
  );
}
