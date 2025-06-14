"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import location from "@/assets/icons/NavLocation.svg";
import { navbarCenterData } from "@/constants";
import { cn } from "@/lib/utils";
import { styles } from "@/styles/styles";

const languages = navbarCenterData.rightData.selectLang;

export function NavCenterAccardion() {
  const [language, setLanguage] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={cn(styles.unitxt, "gap-2 text-sm px-3 py-2")}
        >
          <img src={location} alt="Location" className="w-5 h-5" />
          {languages.find((l) => l.id === language)?.title}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Выберите ваш регион:</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-2 mt-4">
          {languages.map((lang) => (
            <Button
              key={lang.id}
              onClick={() => setLanguage(lang.id)}
              variant="ghost"
              className={cn(
                styles.unitxt,
                "justify-start text-sm font-normal px-4 py-2 rounded-md transition",
                language === lang.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-black"
              )}
            >
              {lang.title}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
