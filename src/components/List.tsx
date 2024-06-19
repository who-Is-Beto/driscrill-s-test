import { New, User } from "@prisma/client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { FC, ReactNode } from "react";

type ListProps = {
  data: Array<User & New>;
  isUserList?: boolean;
};

const List: FC<ListProps> = ({ data, isUserList }): ReactNode => {
  const currentLocale = useLocale();
  return (
    <ul className="w-full flex flex-col gap-2 justify-center items-center text-center p-4">
      {data.map(
        (item): JSX.Element => (
          <li className="w-full flex" key={item.id}>
            <Link
              className="text-slate-300 p-6 font-bold duration-300 rounded-xl hover:bg-slate-900 bg-slate-600 w-full hover:text-slate-100"
              href={`/${currentLocale}/${isUserList ? "user" : "new"}/${
                item.id
              }`}
            >
              {item.name ? item.name : item.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default List;
