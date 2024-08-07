import * as lucideIcons from "lucide-react";
import { icons } from "lucide-react";

type IconProps = {
  name?: string;
  color?: string;
  size?: number | string;
};

const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = lucideIcons[name as keyof typeof icons] || lucideIcons.Ban;

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
