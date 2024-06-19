"use client";

import Image from "next/image";
import React, { FC, ReactNode } from "react";
import Logo from "@/images/logo.png";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Select from "./Select";
import Option from "./Select/Option";

const Navbar: FC = (): ReactNode => {
  const navigate = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations();

  const changeLocale = (newLocale: string) => {
    navigate.push(`/${newLocale}${pathname.split(currentLocale)[1]}`);
  };
  return (
    <header>
      <nav className="flex justify-between p-2 pt-0 flex-wrap">
        <Image
          src={Logo}
          width={200}
          height={100}
          alt="logo"
          className="mx-auto"
        />
        <Select selectHandler={() => {}} placeholder={t("navbar.lang")}>
          <Option value="en">
            <button onClick={() => changeLocale("en")}>English 🇺🇸</button>
          </Option>
          <Option value="es">
            <button onClick={() => changeLocale("es")}>Español 🇲🇽</button>
          </Option>
        </Select>

        <Select selectHandler={() => {}} placeholder={t("navbar.pages")}>
          <Option value="createUser">
            <Link className="w-full h-full" href={`/${currentLocale}/create`}>
              {t("navbar.createUser")}
            </Link>
          </Option>
          <Option value="users">
            <Link href={`/${currentLocale}/users`}>{t("navbar.users")}</Link>
          </Option>
          <Option value="createNew">
            <Link href={`/${currentLocale}/create-new`}>
              {t("navbar.createNew")}
            </Link>
          </Option>
          <Option value="news">
            <Link href={`/${currentLocale}/news`}>{t("navbar.news")}</Link>
          </Option>
        </Select>
      </nav>
    </header>
  );
};

export default Navbar;
