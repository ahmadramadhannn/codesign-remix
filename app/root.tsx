import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css?url"
import favicon from "/code-the-design.svg?url"


import { fonts } from "../lib/constants";
import { Footer, Navbar } from "~/components"

export const links: LinksFunction = () => {

  const fontFamilies = Object.values(fonts).join('&family=');


  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamilies}&display=swap`;
  return [
    { rel: "stylesheet", href: stylesheet },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },

    { rel: "stylesheet", href: fontUrl },
    { rel: "icon", href: favicon },
  ]
}

export const meta: MetaFunction = () => {
  return [
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const liveRoute = location.pathname.includes("live")
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Level up your coding skills with hands-on design challenges" />
        <meta name="keywords" content="code the design, design with figma, design web, design challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Code The Design </title>
        <Meta />
        <Links />
      </head>
      <body className={`${!liveRoute ? 'bg-home-primary-blue p-7 sm:p-8 xl:p-20' : ''} min-h-svh relative`}>
        <div className={`${!liveRoute ? 'lg:mt-9 xl:mt-0 xl:w-[73em] xl:mx-auto' : ''}`}>
          {!liveRoute && <Navbar />}
          <main className={`${!liveRoute ? 'mt-10' : ''}`}>

            {children}
          </main>



          {!liveRoute && <Footer />}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
