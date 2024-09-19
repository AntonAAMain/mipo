import cn from "classnames";

import cls from "./PracticalModules.module.scss";
import { Triangle } from "@/components/ui/Triangle/Triangle";

export const PracticalModules = () => {
  const angleSize = 43;

  return (
    <div className={cn(cls.container)}>
      <div className={cls.title}>Практические модули</div>

      <div className={cls.description}>
        Работа над собственными проектами: практика групповых взаимодействий,
        кейс-методы, эссе
      </div>

      <Triangle
        className={cls.whiteAngle}
        color="white"
        a={angleSize}
        b={angleSize}
      />
      <Triangle
        className={cls.redAngle}
        color="rgba(205, 24, 0, 1)"
        a={angleSize}
        b={angleSize}
      />
    </div>
  );
};
