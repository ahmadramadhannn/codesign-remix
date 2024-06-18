export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="font-patrick-hand text-xl text-home-brand grid items-center text-center gap-2 mt-10 mb-24 lg:mb-10">
      <p>Copyright &copy; {year}</p>
      <a href="" target="_blank" className="underline">Ahmad Ramadhan</a>
      <p>Powered by Cloudflare Pages</p>
    </footer>
  )
}
