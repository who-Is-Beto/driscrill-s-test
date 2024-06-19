"use client";

import Form from "@/components/Form";
import Loader from "@/components/Loader";
import { useMutation } from "@/hooks/useMutation";
import { useQuery } from "@/hooks/useQuery";
import { User } from "@prisma/client";
import { NextPage } from "next";
import { useLocale } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import React, { FormEvent, FormEventHandler, ReactNode } from "react";
import { FaTrashCan } from "react-icons/fa6";

const UserPage: NextPage = (): ReactNode => {
  const { id } = useParams<{ id: string }>();
  const navigate = useRouter();
  const { data, loading } = useQuery(`user?id=${id}`);
  const { mutate } = useMutation();
  const currentLocale = useLocale();

  const changeLocale = (newLocale: string) => {
    navigate.push(`/${newLocale}/users`);
  };

  const handleSubmit: FormEventHandler<Element> = (
    event: FormEvent<Element>
  ): void => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    form.append("id", id);
    form.append(
      "createdAt",
      (data as { user: User }).user.createdAt.toString()
    );
    form.append(
      "updatedAt",
      (data as { user: User }).user.updatedAt.toString()
    );
    const formState = Object.fromEntries(form.entries());

    mutate("user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    }).then(() => {
      changeLocale(currentLocale);
    });
  };

  const handleDelete = () => {
    mutate(`user`, {
      method: "DELETE",
      body: JSON.stringify({ id })
    }).then(() => {
      changeLocale(currentLocale);
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <div className="flex justify-end px-4">
        <button
          className="text-2xl p-2 rounded-lg duration-200 bg-red-800 text-slate-100 focus:outline-none focus:scale-90"
          onClick={handleDelete}
        >
          <FaTrashCan />
        </button>
      </div>
      <Form initialState={data!.user as any} submitHandler={handleSubmit} />
    </main>
  );
};

export default UserPage;
