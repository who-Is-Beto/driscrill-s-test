"use client";

import CreateUser from "@/views/createUser";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import React, { ReactNode } from "react";

const Create: NextPage = (): ReactNode => {
  const t = useTranslations();

  return (
    <main className="p-4">
      <p className="font-bold text-slate-300">{t("createUser")}</p>
      <CreateUser />
    </main>
  );
};

export default Create;
