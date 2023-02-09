

import Image from "next/image";

export default function StartupCard(props) {
  return (
    <>
      <div className="w-[15vw] py-[2vh] flex flex-col items-center justify-center gap-[3.2vh]">
        <div className="w-[11vw] flex flex-col items-center">
          <Image
            width={218}
            height={218}
            className="rounded-[100%]"
            src={props.startupCard.img}
          ></Image>
          <div className="rounded-[100%] w-[3vw] px-3 py-3 bg-white mt-[-24px] flex items-center justify-center">
            <Image width={48} height={48} src={"/linkedin_badge.svg"}></Image>
          </div>
        </div>
        <h1 className="font-bold text-[#5F6368] w-[11vw] text-center">
          {props.startupCard.name}
        </h1>
        <div className="flex flex-col items-center text-[0.8rem] text-[#5F6368] gap-[8px]">
          <p>{props.startupCard.country}</p>
          <p>Technologie</p>
        </div>
        <button
         
         className="text-[#3069FE] w-[7.5vw] h-[6vh] border rounded-[4px] text-[0.7rem]">
          View Profile
        </button>
      </div>
    </>
  );
}
