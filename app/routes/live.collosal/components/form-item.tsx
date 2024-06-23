import { HTMLInputTypeAttribute } from "react";

type FormItemProps = {
  label: string;
  id: string;
  type?: HTMLInputTypeAttribute;
}

export function FormItem({ label, id, type = "text" }: FormItemProps) {
  return (
    <>
      <label htmlFor={id} className="text-white/60 text-sm">{label}</label>
      <input type={type} className="bg-inherit border-2 border-white/10 p-2 focus:outline-none" id={id} />
    </>
  )
}
