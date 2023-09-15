import { Square } from "./Square";
import { TURNS } from "../constants";
export function TurnIndicator({ turn }) {
  return (
    <div className="footer flex justify-center mb-12">
      <section className="flex justify-center text-white gap-4">
        <Square isSelected={turn === TURNS.X} isSmall={true}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} isSmall={true}>
          {TURNS.O}
        </Square>
      </section>
    </div>
  );
}
