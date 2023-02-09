"use client";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import StartupCard from "@/components/StartupCard";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Profile() {
  return (
    <>
      <Navbar />

      <div className="w-[100vw] h-[170vh]  self-center h-screen flex flex-col  items-center justify-center gap-[7.2vh]">
        <div className="w-[19vw]  flex flex-col items-center">
          <Image
            width={318}
            height={318}
            className="rounded-[100%]"
            src="/akram_boutouchent.png"
          ></Image>
          <div className="rounded-[100%] w-[3vw] px-3 py-3 bg-white mt-[-24px] flex items-center justify-center">
            <Image width={48} height={48} src={"/linkedin_badge.svg"}></Image>
          </div>
        </div>
        <p className="font-bold text-[#5F6368] text-4xl ">AKRAM BOUTOUCHENT</p>
        <div className="flex gap-[13vw] mt-20">
          <div className=" w-[10vw] flex flex-col items-center justify-center gap-[3vh]">
            <Image width={70} height={70} src={"/mail.svg"}></Image>
            <p className="font-bold text-[#5F6368] text-2xl text-center">Akram Boutouchent</p>
          </div>
          <div className=" w-[10vw] flex flex-col items-center justify-center gap-[3vh]">
            <Image width={70} height={70} src={"/phone.svg"}></Image>
            <p className="font-bold text-[#5F6368] text-2xl text-center">Akram Boutouchent</p>
          </div>
          <div className=" w-[10vw] flex flex-col items-center justify-center gap-[3vh]">
            <Image width={70} height={70} src={"/facebook.svg"}></Image>
            <p className="font-bold text-[#5F6368] text-2xl text-center">Akram Boutouchent</p>
          </div>
          <div className=" w-[10vw] flex flex-col items-center justify-center gap-[3vh]">
            <Image width={70} height={70} src={"/github.svg"}></Image>
            <p className="font-bold text-[#5F6368] text-2xl text-center">Akram Boutouchent</p>
          </div>
        </div>
        <div className="  w-[44vw]  grid grid-flow-row auto-rows-max grid-cols-4 gap-[0.5vw] mt-12">
          
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            <div className="bg-[#F1B201] w-[10vw] h-[4vh]  rounded-lg flex items-center justify-center gap-[0.5vw]">
              <p className="text-[#ffffff]">Developer</p>
              <button className="text-[#ffffff]">
                <Image
                  className="hover:fill-[#eeeeee]"
                  width={10}
                  height={10}
                  src={"/delete.svg"}
                ></Image>{" "}
              </button>
            </div>
            
            
        </div>
        <input
            placeholder="Add a Note ..."
            className="px-[1.5vw]  placeholder:self-start w-[44vw] h-[22vh] bg-[#EEEEEE] rounded-lg "
            type="text"
            id="Note"
            name="Note"
          />
      </div>

      <Footer />
    </>
  );
}
