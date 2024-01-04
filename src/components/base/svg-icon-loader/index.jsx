import spritesheet from "../../../assets/svg/sprite-sheet.svg";

function SvgIconLoader({ icon, size = 24, color = "#444444" }) {
  return (
    <svg width={size} height={size}>
      <use xlinkHref={`${spritesheet}#${icon}`} style={{ stroke: color }} />
    </svg>
  );
}

export default SvgIconLoader;
