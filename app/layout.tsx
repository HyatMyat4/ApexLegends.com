import "../styles/globals.css";
import Providers from "./Provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className=" bg-black" >
      <head />
      <body id='cutomscoll'>
        <Providers>{children}</Providers>
        </body>
    </html>
  )
}
