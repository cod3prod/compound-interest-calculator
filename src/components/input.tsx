import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  children?: React.ReactNode;
  className?: string;
  name: string;
};

export function Input(props: InputProps) {
  const { children, className, name, ...rest } = props;

  return (
    <div className="my-4">
      <label
        htmlFor={name}
        className={"block mb-1 text-[0.5rem] font-bold uppercase"}
      >
        {children}
      </label>
      <input
        id={name}
        className={twMerge(
          "w-full p-2 border border-[#76c0ae] rounded-md bg-transparent text-[#c2e9e0] text-base",
          className
        )}
        {...rest}
      />
    </div>
  );
}
