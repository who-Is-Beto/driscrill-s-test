"use client";

import List from "@/components/List";
import Loader from "@/components/Loader";
import { useQuery } from "@/hooks/useQuery";
import { User } from "@prisma/client";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import React, { ReactNode } from "react";

const News: NextPage = (): ReactNode => {
  const { data, error, loading } = useQuery("news");
  const t = useTranslations();
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error...</div>;
  }
  return (
    <main>
      <h1 className="text-slate-300 text-2xl font-bold text-center">
        {t("news.newsList")}
      </h1>
      <List data={(data as unknown as { news: any }).news} />;
    </main>
  );
};

export default News;
