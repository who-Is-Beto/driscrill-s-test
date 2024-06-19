import useOnClickOutside from "@/hooks/useClickOutside";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { SelectContext } from "./SelectContext";
import { AiFillCaretDown } from "react-icons/ai";

type SelectProps = {
  children: Readonly<ReactNode | ReactNode[]>;
  defaultValue?: string;
  placeholder?: string;
  selectHandler?: (value: any) => void;
};

const Select: FC<SelectProps> = ({
  defaultValue,
  selectHandler,
  placeholder,
  children
}): ReactNode => {
  const [selectedOption, setSelectedOption] = useState<string>(
    defaultValue || ""
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [placeholderValue, setPlaceholderValue] = useState<string>("");
  const handleShowDropdown = (): void => setShowDropdown(!showDropdown);

  const selectContainerRef = useRef<HTMLDivElement>(null);

  const handleClickOutSide = () => setShowDropdown(false);
  useOnClickOutside(selectContainerRef, handleClickOutSide);
  const updateSelectedOption = (option: string): void => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  useEffect((): void => {
    if (selectedOption && selectHandler) {
      selectHandler(selectedOption);
    }
  }, [selectedOption, selectHandler]);

  useEffect((): void => {
    setPlaceholderValue(placeholder || "Select an option");
  }, [placeholder]);
  return (
    <SelectContext.Provider
      value={{
        selectedOption,
        changeSelectedOption: updateSelectedOption
      }}
    >
      <div
        ref={selectContainerRef}
        onClick={handleShowDropdown}
        className="duration-300 p-4 rounded-2xl cursor-pointer border-none relative shadow-sm bg-slate-900 text-slate-300 w-40 origin-bottom-left"
      >
        <span className="flex justify-between items-center text-slate-300 font-bold">
          {selectedOption.length > 0 ? selectedOption : placeholderValue}
          <AiFillCaretDown
            className={`${showDropdown ? "rotate-180" : ""} duration-300`}
          />

          {showDropdown && (
            <ul className="absolute overflow-auto flex flex-col gap-2 list-none top-[120%] max-h-40 left-0 w-full bg-slate-900 text-slate-300 rounded-2xl shadow-md z-30 origin-top-left duration-300">
              {children}
            </ul>
          )}
        </span>
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
