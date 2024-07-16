import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const title = params.title

  return json({ title })
}

export default function Page() {
  const { title } = useLoaderData<typeof loader>()


  return (
    <div>
      <p>hello guys welcome</p>
    </div>
  )
}
