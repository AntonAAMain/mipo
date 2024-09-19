import cn from "classnames";

import cls from "./Module.module.scss";
import { useState } from "react";
import Image from "next/image";

interface Props {
  number: number;
  text: string[];
}

export const Module = ({ number, text }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggle = () => setIsExpanded((prev) => !prev);

  const iconPath = `/imgs/${isExpanded ? "minus" : "plus"}.svg`;

  return (
    <div className={cn(cls.container)}>
      <div className={cls.border}></div>

      <h2
        onClick={toggle}
        className={cn(cls.title, { [cls.title_expanded]: isExpanded })}
      >
        <div className={cls.img}>
          <Image objectFit="contain" layout="fill" src={iconPath} alt="" />
        </div>
        {number} модуль
      </h2>

      <div className={cn(cls.body, { [cls.body_expanded]: isExpanded })}>
        {text.map((item) => (
          <div key={item} className={cls.bodyItem}>
            <div className={cls.bodyItemDot}></div>
            <div className={cls.bodyItemText}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
