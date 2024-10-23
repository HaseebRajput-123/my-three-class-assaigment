"use client" 
 
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const rout = useRouter()
  return (<div className="bg-slate-600 text-white p-3 flex items-left justify-left " >
    <ul>
     <Link href="/"> <li>Home</li></Link>
      <Link href="/About"><li>About</li></Link>
      <Link href="/Contact"><li>Contact us</li></Link>
      <Link href="/Footer"><li>Footer</li></Link>
      <Link href="/Navbar"><li>Navbar</li></Link>
   
      <div className= "absolute top-0 right-0 m-4 flex flex-row space-x-4">
<button 
  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out mb-2" 
  onClick={() => rout.push("/")}>
  Home
</button>
<br />
<button 
  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out mb-2" 
  onClick={() => rout.push("/About")}>
  About
</button>
<br />
<button 
  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out mb-2" 
  onClick={() => rout.push("/Contact")}>
  Contact us
</button>
<br />
<button 
  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out mb-2" 
  onClick={() => rout.push("/Footer")}>
  Footer
</button>
<br />
<button 
  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out mb-2" 
  onClick={() => rout.push("/Navbar")}>
  Navbar
</button>
<br />
</div>

</ul>

</div>

  );
}