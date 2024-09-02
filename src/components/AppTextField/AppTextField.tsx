import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { clsx } from "clsx";
import { omit } from "rambda";

type CommonProps = {
  label: string;
  className?: string;
};

type InputProps = {
  tag: "input";
} & InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = {
  tag: "textarea";
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = CommonProps & (InputProps | TextareaProps);

export const AppTextField: React.FC<Props> = ({ label, className = "", ...props }) => {
  const commonClassNames = clsx(
    "w-full px-4 text-sm bg-white rounded border outline-0 placeholder:text-gray-70",
    "border-primary-light-50 hover:border-primary-light-75 hover:focus:border-primary focus:border-primary"
  );

  return (
    <label className={clsx("block", className)}>
      <span className='block text-lg mb-3 select-none'>
        {label}
        {props.required ? "*" : null}
      </span>
      {props.tag === "input" ? (
        <input
          {...omit("tag", props)}
          className={clsx("h-[54px] outline-none", commonClassNames)}
        />
      ) : (
        <textarea
          {...omit("tag", props)}
          className={clsx(
            "py-4 resize-none scrollbar-thin scrollbar-thumb-primary",
            "scrollbar-track-gray-5 scrollbar-thumb-rounded scrollbar-track-rounded outline-none",
            commonClassNames
          )}
        />
      )}
    </label>
  );
};
