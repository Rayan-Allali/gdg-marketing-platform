import Image from "next/image";

export default function Navbar() {
  return (
    <div className="px-[5.2vw] bg-white w-screen h-[9vh] flex justify-between items-center drop-shadow-md">
      <Image width={96} height={40} src={"/logo.svg"}></Image>
      <ul className="flex gap-[96px] text-[#696969]">
        <li>Home</li>
        <li>Startups</li>
        <li>Guests</li>
        <li>Archive</li>
      </ul>
    </div>
  );
}
