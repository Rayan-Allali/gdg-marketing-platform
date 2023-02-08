import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-16 my-8">
        <Image
          width={650}
          height={600}
          className="w-[25vw]"
          src={"/android.png"}
        ></Image>
        <h1 className="text-[#000103] font-bold text-4xl">
          Welcome To <span className="text-[#0D9D58]">GDG Algiers</span>{" "}
          Marketing Platform
        </h1>
        <button className="px-[4vw] py-[2vh] text-[#0D9D58] border rounded-[8px] border-[#0D9D58] font-bold hover:bg-[#0D9D58] hover:text-white">
          Get Started
        </button>
      </div>
      <div className="flex items-center justify-center flex-col gap-16 my-32">
        <h2 className="font-bold text-2xl">Powered By</h2>
        <div className="flex justify-between w-[70vw] align-center items-center">
          <Image width={400} height={400} src={"/GDGAlgiers.png"}></Image>
          <p className="max-w-[40vw] text-center text-[24px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex justify-between w-[70vw] align-center items-center">
          <p className="max-w-[40vw] text-center text-[24px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Image width={400} height={400} src={"/WTM Algiers.png"}></Image>
        </div>
      </div>

      <Footer />
    </>
  );
}
