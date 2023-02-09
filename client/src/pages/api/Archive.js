"use client";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CardEvent from "@/components/CardEvent";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Archive() {
  const [event, setEvent] = useState([
    {
      eventId: null,
      name: "",
      img: "",
    },
  ]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/event/`).then((resp) => {
      const copy = resp.data;
      copy.map((card) => (card.img = "/DevFest 22.png"));
      setEvent(copy);
    });
  }, []);

  const ensEvent = event.map((card) => {
    return <CardEvent event={card} />;
  });

  return (
    <>
      <Navbar />
      <div className="px-[5vw] my-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Archive</h1>
          <p className="text-[#676C72]">
            Here are our events, here you can find sponsors and guests of any
            event !
          </p>
        </div>
        <div className="z-[-1]">
        <div className="grid grid-cols-5 gap-[3vh]">{ensEvent}</div>
        </div>
        <div className="w-[100%] h-[50vh] mt-[-20vh] flex justify-center items-center">
          <button className="px-[8vw] py-[2vh] text-[#0D9D58] border rounded-[8px] border-[#0D9D58] font-bold hover:bg-[#0D9D58] hover:text-white">
            See More
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
