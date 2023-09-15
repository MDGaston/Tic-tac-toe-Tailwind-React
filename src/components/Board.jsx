import { Square } from "./Square";
export function Board({ board, updateBoard }) {
  return (
    <div className="flex-grow flex items-center justify-center">
      <section className="flex justify-center">
        <div className="grid gap-5 grid-cols-3 text-white text-5xl font-bold">
          {board.map((square, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          ))}
        </div>
      </section>
    </div>
  );
}
