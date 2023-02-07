import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-[5.2vw] bg-white w-screen h-[50vh] flex flex-col gap-[3.5vh] justify-center items-center drop-shadow-[0_8px_8px_rgba(-5,-5,10,0.5)]">
      <Image width={300} height={40} src={"/logo_v2.svg"}></Image>
      <p className="text-[1rem] text-[#676C72] max-w-[40vw] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo donec
        tempor, in ullamcorper in amet nulla.
      </p>
      <div className="flex gap-[4.5vw]">
        <Image width={40} height={40} src={"/facebook.svg"}></Image>
        <Image width={40} height={40} src={"/twitter.svg"}></Image>
        <Image width={40} height={40} src={"/instagram.svg"}></Image>
        <Image width={40} height={40} src={"/linkedin.svg"}></Image>
        <Image width={40} height={40} src={"/discord.svg"}></Image>
      </div>
    </div>
  );
}
