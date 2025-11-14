interface TerminalFooterProps {
  blink: boolean;
}

export const TerminalFooter = ({ blink }: TerminalFooterProps) => {
  return (
    <div className="mt-4 border-2 border-green-500 rounded-lg p-4 bg-black">
      <div className="flex items-center gap-2 text-green-400">
        <span className="text-green-500">user@tinytorch</span>
        <span className="text-green-600">~</span>
        <span className="text-green-400">$</span>
        <span className={blink ? 'opacity-100' : 'opacity-0'}>▊</span>
      </div>
    </div>
  );
};
