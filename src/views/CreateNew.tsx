import Form from "@/components/Form";
import Loader from "@/components/Loader";
import { useMutation } from "@/hooks/useMutation";
import { User } from "@prisma/client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { FC, FormEvent, FormEventHandler, ReactNode } from "react";

const CreateANew: FC = (): ReactNode => {
  const t = useTranslations();
  const {
    mutate,
    state: { error, loading, data }
  } = useMutation();
  const navigate = useRouter();
  const currentLocale = useLocale();
  const newTemplate = {
    title: "",
    content: ""
  };

  const changeLocale = (newLocale: string) => {
    navigate.push(`/${newLocale}/news`);
  };

  const handleSubmit: FormEventHandler<Element> = (
    event: FormEvent<Element>
  ) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    const formState = Object.fromEntries(form.entries());
    mutate("/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    }).then(() => {
      changeLocale(currentLocale);
    });
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <section>
      <Form initialState={newTemplate} submitHandler={handleSubmit} />
    </section>
  );
};

export default CreateANew;
