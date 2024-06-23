import { Link } from "@remix-run/react";

type ButtonProps = {
  link?: boolean;
  href?: string;
  content: string;
  type: "primary" | "secondary"
}

// TODO: 

export function Button({ type, content, link = false, href }: ButtonProps) {
  const className = `font-semibold text-base px-14 py-2 text-center ${type === "primary" ? "bg-collosal-primary" : "bg-white/10"}`
  if (link) {
    return (
      <Link to={`${href}`} className={className}>{content}</Link>
    )
  }

  return (
    <button className={className}>{content}</button>
  )
}
