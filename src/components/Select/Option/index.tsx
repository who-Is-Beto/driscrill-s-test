import React, { ReactNode } from "react";
import { useSelectContext } from "../SelectContext";

const Option: React.FC<{
  children: ReactNode | ReactNode[];
  value: string;
}> = ({ children, value }) => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <li
      onClick={(): void => changeSelectedOption(value)}
      className="font-bold capitalize bg-slate-900 text-slate-300 cursor-pointer text-left p-4 hover:bg-slate-300 hover:text-slate-900 transition-colors duration-300"
    >
      {children}
    </li>
  );
};

export default Option;
