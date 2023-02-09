import Image from "next/image";

export default function CardEvent(props) {
  return (
    <div className="z-0">
      <div className="w-[15vw] py-[2vh] flex flex-col items-center justify-center gap-[3.2vh]">
        <div className="w-[11vw] flex flex-col items-center">
          <Image
            width={218}
            height={218}
            className="rounded-[100%]"
            src={props.event.img}
          ></Image>
        </div>
        <h1 className="font-bold text-[#5F6368] w-[11vw] text-center">
          {props.event.Name}
        </h1>
        <div className="flex flex-col items-center text-[0.8rem] text-[#5F6368] gap-[8px]">
          <p>GDG Algiers</p>
          <p>DEC 2022</p>
        </div>
      </div>
    </div>
  );
}
