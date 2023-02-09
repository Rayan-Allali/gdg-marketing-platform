import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="px-[5.2vw] bg-white w-screen h-[9vh] flex justify-between items-center drop-shadow-md">
      <Image width={96} height={40} src={"/logo.svg"}></Image>
      <ul className="flex gap-[96px] text-[#696969]">
       <Link  href="http://localhost:3000/homepage"><li>Home</li></Link> 
        <Link href="http://localhost:3000/startups"><li>Startups</li></Link>
        <Link href="http://localhost:3000/guests"><li>Guests</li></Link>
        <Link href="http://localhost:3000/Archive"><li>Archive</li></Link> 
      </ul>
    </div>
  );
}
