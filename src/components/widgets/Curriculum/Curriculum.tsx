import { Module } from "./Module/Module";
import cn from "classnames";

import cls from "./Curriculum.module.scss";

interface Props {
  curriculum: ICurriculum;
}

export const Curriculum = ({ curriculum }: Props) => {
  const allTexts = [
    ...(curriculum?.specializedSubjects?.skills || []).map(
      (item) => item.title
    ),
    ...(curriculum?.whatWillYouLearn || []).map((item) => item.string),
    ...(curriculum?.WhatWillYouLearnNew || []).map((item) => item.string),
  ].slice(0, 10);

  const midIndex = Math.ceil(allTexts.length / 2); // Находим индекс, до которого будем разделять
  const firstHalf = allTexts.slice(0, midIndex); // Первый массив
  const secondHalf = allTexts.slice(midIndex); // Второй массив

  return (
    <>
      {allTexts.length > 0 && (
        <div className={cn(cls.container)}>
          <h2 className={cls.title}>{curriculum.title}</h2>

          <div className={cls.body}>
            <Module number={1} text={firstHalf} />
            <Module number={2} text={secondHalf} />
          </div>
        </div>
      )}
    </>
  );
};
