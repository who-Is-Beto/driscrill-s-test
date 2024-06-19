"use client";

import Loader from "@/components/Loader";
import { useQuery } from "@/hooks/useQuery";
import { New } from "@prisma/client";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { ReactNode } from "react";

const NewPage: NextPage = (): ReactNode => {
  const { id } = useParams<{ id: string }>();
  const t = useTranslations();

  const { data, loading } = useQuery(`new?id=${id}`);

  if (loading) {
    return <Loader />;
  }

  const { title, content } = (data as { new: New }).new;

  return (
    <main className="p-4">
      <section className="bg-slate-300 rounded-lg p-4 text-center flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl">{content}</p>
      </section>
    </main>
  );
};

export default NewPage;
