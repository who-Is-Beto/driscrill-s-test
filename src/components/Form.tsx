import { MessageKeys, useTranslations } from "next-intl";
import React, { FC, ReactNode, useState, FormEvent } from "react";

type FormProps = {
  initialState: Record<string, unknown>;
  submitHandler: (event: FormEvent) => void;
};

const Form: FC<FormProps> = ({ initialState, submitHandler }): ReactNode => {
  const t = useTranslations();
  const [state, setState] = useState<Record<string, unknown>>(initialState);
  const dataToNotShow = ["id", "createdAt", "updatedAt"];
  return (
    <form className="flex flex-col p-4 gap-2" onSubmit={submitHandler}>
      {Object.entries(state).map(([key, value]) => {
        if (dataToNotShow.includes(key)) return null;
        return (
          <div className="flex flex-col" key={key}>
            <label className="text-slate-300 font-bold" htmlFor={key}>
              {t(`form.${key}` as MessageKeys<IntlMessages, "form">)}
            </label>
            <input
              className="focus:outline-none p-4 bg-slate-900 shadow-md rounded-2xl font-bold text-slate-300"
              type={key || "text"}
              name={key}
              id={key}
              required
              value={value as string}
              onChange={(event) => {
                setState({ ...state, [key]: event.target.value });
              }}
            />
          </div>
        );
      })}
      <button
        className="bg-yellow-300 p-2 my-4 font-bold text-slate-900 rounded-lg duration-200 hover:bg-yellow-400 hover:text-slate-100 focus:outline-none focus:scale-90"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
