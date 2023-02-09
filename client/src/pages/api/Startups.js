"use client";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import StartupCard from "@/components/StartupCard";
import { useState,useEffect } from "react";
import axios from "axios";
export default function Startups() {
  const [startupCards,setstartupCards] = useState([{
    companieId:null,
    img:"/akram_boutouchent.png",
    name:"dddd",
    country:"bbb",
    size:""
  },
  {
    companieId:null,
    img:"/akram_boutouchent.png",
    name:"dddd",
    country:"bbb",
    size:""
  },
  {
    companieId:null,
    img:"/akram_boutouchent.png",
    name:"dddd",
    country:"bbb",
    size:""
  },
  {
    companieId:null,
    img:"/akram_boutouchent.png",
    name:"dddd",
    country:"bbb",
    size:""
  },
  {
    companieId:null,
    img:"/akram_boutouchent.png",
    name:"ddf",
    country:"fff",
    size:""
  },
  {
    companieId:null,
    img:"/akram_boutouchent.png",
    name:"ggg",
    country:"gfgf",
    size:""
  },
]);

useEffect(()=> {
  axios.get(`http://localhost:8000/api/companie/`).then((resp)=>{
   const copy = resp.data ;
   copy.map((card) => card.img = "/akram_boutouchent.png" )
   setstartupCards(copy);
  }
  )
}
  ,[]);
  
const [counter,setCounter]=useState(0);
const ensStartups=startupCards.map(
 (card)=>{
    
      
    return(
    
      
       <StartupCard startupCard= {card} />       
      
    
    )
 }


);
  
  return (
    <>
      <div className="absolute">
        <Navbar />
      </div>

      <div className=" h-[700px] w-[100vw] bg-[url('/Image2.png')] bg-cover flex flex-col gap-[1rem] justify-center items-center ">
        <h2 className="font-regular text-white text-[40px]">
          Stop looking for a Startup - find it.
        </h2>
        <div className="flex bg-white drop-shadow-[0_8px_8px_rgba(0,0,0,0.08)] rounded-[12px] px-[1.5vw]">
          <Image width={25} height={25} src={"/search.svg"}></Image>
          <input
            placeholder="Search"
            className="px-[1.5vw] w-[68vw] h-[10vh]"
            type="text"
            id="Email"
            name="Email"
          />
        </div>
      </div>

      <div className="flex px-[4vw] gap-[2vw] text-[#545B61] my-[8vh] mb-[30vh]">
        <div className="w-[20vw] flex flex-col gap-[2vh]">
          <div className="flex justify-between my-8">
            <h3>Filter</h3>
            <div className="flex align-center text-[#545B61] gap-[0.7vw]">
              <Image width={16} height={16} src={"/clear.svg"}></Image>
              <p>Clear filters</p>
            </div>
          </div>

          <div>
            <h2 className="text-[1.6rem] font-bold text-[#252C32] py-4">
              Location
            </h2>
            <div className="flex flex-col gap-[0.8vw]">
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Algerie, (200)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> France (20)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Autre (50)</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[1.6rem] font-bold text-[#252C32] py-4">
              Size
            </h2>
            <div className="flex flex-col gap-[0.8vw]">
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Large (20)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Medium (20)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Small (50)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> All (50)</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[1.6rem] font-bold text-[#252C32] py-4">
              Type
            </h2>
            <div className="flex flex-col gap-[0.8vw]">
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Technology (200)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Food (20)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Venues (50)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> All (270)</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[1.6rem] font-bold text-[#252C32] py-4">
              Option
            </h2>
            <div className="flex flex-col gap-[0.8vw]">
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> Old Partner (200)</p>
              </div>
              <div className="flex align-center items-center gap-[0.8vw] text-[#646567]">
                <input type="checkbox" id="first" name="first" />
                <p className="text-[16px]"> New Partner (20))</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[70vw] h-screen px-[4vw]">
          <div className="flex justify-between my-8 align-center">
            <h3 className="font-bold text-[#252C32]">
              Found <span className="text-[#3069FE]">376 results</span> in 54
              seconds
            </h3>
            <div className="flex align-center text-[#545B61] gap-[0.7vw]">
              <div className="flex gap-[0.8vw] rounded-[8px] border-[#DDE2E4] border py-2 px-4">
                <h3 className="text-[#787878]">Sort by</h3>
                <h3 className="text-[#252C32]">Rating: Low to High</h3>
                <p className="text-[#787878]">&or;</p>
              </div>
              <div className="flex gap-[0.8vw] rounded-[8px] border-[#DDE2E4] border py-2 px-4">
                <h3 className="text-[#787878]">Results</h3>
                <h3 className="text-[#252C32]">1 - 5</h3>
                <p className="text-[#787878]">&or;</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-[3vh]">
          
              {ensStartups}
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
