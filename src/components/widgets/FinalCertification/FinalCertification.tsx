import cn from "classnames";

import cls from "./FinalCertification.module.scss";

export const FinalCertification = () => {
  return (
    <div className={cn(cls.container)}>
      <h2 className={cls.title}>Итоговая аттестация</h2>

      <div className={cls.text}>
        <div className={cls.paragraph}>
          <div className={cls.paragraphDot}></div>

          <div className={cls.paragraphText}>
            Бизнес-проектирование (подготовка итоговой аттестационной работы,
            консультирование по бизнес-проектированию)
          </div>
        </div>

        <div className={cls.paragraph}>
          <div className={cls.paragraphDot}></div>

          <div className={cls.paragraphText}>
            Защита итоговой аттестационной работы
          </div>
        </div>
      </div>
    </div>
  );
};
