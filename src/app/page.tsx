"use client";

import Image from "next/image";

import styles from "./page.module.css";
import { useEffect } from "react";
import axios from "axios";
import { Curriculum } from "@/components/widgets/Curriculum/Curriculum";
import { PracticalModules } from "@/components/widgets/PracticalModules/PracticalModules";
import { FinalCertification } from "@/components/widgets/FinalCertification/FinalCertification";
import { useCurriculumsStore } from "@/shared/zustand/useCurriculumsStore";

import cn from "classnames";

export default function Home() {
  const { fetchCurriculums, isLoading, curriculums } = useCurriculumsStore();

  useEffect(() => {
    fetchCurriculums();
  }, []);

  return (
    <main className={cn(styles.main, { [styles.main_loading]: isLoading })}>
      <h1 className={styles.title}>Специализированные дисциплины</h1>
      <div className={styles.curriculums}>
        {curriculums.map((curriculum) => (
          <Curriculum curriculum={curriculum} key={curriculum.id} />
        ))}
      </div>

      <div className={styles.bottom}>
        <PracticalModules />
        <FinalCertification />
      </div>
    </main>
  );
}
