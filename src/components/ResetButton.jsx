export function ResetButton({ resetGame }) {
  return (
    <button
      className="bg-transparent px-4 py-2 text-2xl mt-10 border-2 border-gray-300 rounded-2xl text-white hover:bg-white hover:text-stone-900 transition-colors"
      onClick={resetGame}
    >
      Reset
    </button>
  );
}
