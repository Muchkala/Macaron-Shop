"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { styles } from "@/styles/styles";
import { cn } from "@/lib/utils";
import location from '@/assets/icons/NavLocation.svg'
import { ChevronDown } from "lucide-react";

interface Props {
  id: number;
  title: string;
}

interface NavCenterAccardionProps {
  selectLang: Props[];
}

export function NavCenterAccardion({ selectLang }: NavCenterAccardionProps) {
  const [language, setLanguage] = useState(0);

  const LanguageList = () => (
    <div className="flex flex-col space-y-2">
      {selectLang.map((lang) => (
        <Button
          key={lang.id}
          onClick={() => setLanguage(lang.id)}
          className={`${cn('font-normal')} ${styles.unitxt} ${
            language === lang.id
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-black"
          }`}
        >
          {lang.title}
        </Button>
      ))}
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className={styles.unitxt}>
          <img src={location} alt="" />
          {selectLang.find((l) => l.id === language)?.title}
          <ChevronDown />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader>
          <DialogTitle>Выберите ваш регион:</DialogTitle>
        </DialogHeader>
        <LanguageList />
      </DialogContent>
    </Dialog>
  );
}
