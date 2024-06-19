"use client";

import CreateNew from "@/views/CreateNew";
import { useTranslations } from "next-intl";
import { FC, ReactNode } from "react";

const CreateNewPage: FC = (): ReactNode => {
  const t = useTranslations();
  return (
    <main className="p-4">
      <p className="font-bold text-slate-300">{t("news.createNews")}</p>
      <CreateNew />
    </main>
  );
};

export default CreateNewPage;
