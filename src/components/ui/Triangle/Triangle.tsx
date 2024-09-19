import cn from "classnames";

interface Props {
  a: number;
  b: number;
  color: string;
  className?: string;
}

export const Triangle = ({ a, b, color, className }: Props) => {
  const triangleStyle = {
    width: 0,
    height: 0,
    borderLeft: `${a}px solid transparent`,
    borderBottom: `${b}px solid ${color}`,
  };

  return <div className={cn(className)} style={triangleStyle}></div>;
};
