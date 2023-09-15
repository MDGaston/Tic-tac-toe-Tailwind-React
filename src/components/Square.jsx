export function Square({ children, updateBoard, index, isSelected, isSmall }) {
  const backgroundColor = isSelected
    ? "bg-green-500 transition-colors"
    : "bg-stone-900";
  // Determina el tamaño de fuente y el tamaño del cuadro en función de isSmall
  const fontSizeClass = isSmall ? "text-2xl" : "text-48";
  const squareSizeClass = isSmall ? "w-24 h-24" : "w-40 h-40";
  const pointer = isSmall ? "" : "cursor-pointer";
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`border-solid border-gray-300 border-2 rounded grid place-items-center ${pointer} ${backgroundColor} ${squareSizeClass} ${fontSizeClass}`}
    >
      {children}
    </div>
  );
}
