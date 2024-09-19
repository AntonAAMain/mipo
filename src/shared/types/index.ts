interface ICurriculum {
  title: string;
  id: number;

  specializedSubjects: {
    id: number;

    skills: {
      id: number;
      title: string;
    }[];
  };

  whatWillYouLearn: {
    id: number;
    string: string;
  }[];

  WhatWillYouLearnNew: {
    id: number;
    string: string;
  }[];
}
