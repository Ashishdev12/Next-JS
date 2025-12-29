import './globals.css'
import NavBar from "../components/NavBar";
import { montserratFont } from '../fonts';

export const metadata =  {
  title:"Ashish Website",
  description: 'You can shop coding shirts from this website',
  keywords: ["coding dress", 'coding shirts']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${montserratFont.className}`}>
      <NavBar/>
        {children}
        </body>
    </html>
  )
}