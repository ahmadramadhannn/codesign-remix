import { HTMLInputTypeAttribute } from "react";

type FormItemProps = {
  name: string;
  id: string;
  type?: HTMLInputTypeAttribute;
}

export function FormItem({ name, id, type = "text" }: FormItemProps) {
  return (
    <>
      <label htmlFor={id} className="text-white/60">{name}</label>
      <input type={type} className="bg-white/5 border-2 border-white/10 py-2 px-2 focus:outline-none" id={id} />
    </>
  )
}
