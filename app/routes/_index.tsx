import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <p className="text-red-500 italic text-yellow-400 font-bold uppercase text-4xl"> code the design </p>
    </div>
  )
}
