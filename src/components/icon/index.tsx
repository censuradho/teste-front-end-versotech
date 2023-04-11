import { icons } from "./icons";
import { IconProps } from "./types";
import { Typography } from "../typography";

export function Icon(props: IconProps) {
  const {
    name, color, size = 20,
  } = props;

  const Svg = icons[name];

  if (!Svg) return null
  
  return (
    <Typography color={color}>
      <Svg
        size={size} 
      />
    </Typography>
  );
}