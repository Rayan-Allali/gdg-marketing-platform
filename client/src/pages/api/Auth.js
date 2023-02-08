import Image from "next/image";

export default function Auth() {
  return (
    <div className="flex flex-row">
      <div className="h-screen w-[50vw] bg-[url('/GDG.png')] bg-cover"></div>
      <div className="h-screen w-[50vw] bg-white drop-shadow-[0_8px_8px_rgba(0,0,0,0.12)] flex justify-center items-center">
        <div className="flex flex-col gap-[6vh]">
          <div className="flex flex-col items-center gap-[3vh]">
            <h2 className="font-bold text-[3.75rem]">Log In</h2>
            <p className="text-[1.2rem] text-[#808080]">
              Please Fill the Form below to Continue
            </p>
          </div>

          <div>
            <label for="Email" className="bg-white w-[32vw] h-[10vh]"></label>
            <input
              placeholder="Email or username"
              className="bg-white w-[30vw] h-[10vh] px-[1.5vw] drop-shadow-[0_8px_8px_rgba(0,0,0,0.08)] rounded-[12px]"
              type="e-mail"
              id="Email"
              name="Email"
            />
          </div>
          <div>
            <label for="Password" className="bg-white w-[32vw] h-[10vh]"></label>
            <input
              placeholder="Enter your Password"
              className="bg-white w-[30vw] h-[10vh] px-[1.5vw] drop-shadow-[0_8px_8px_rgba(0,0,0,0.08)] rounded-[12px]"
              type="password"
              id="Password"
              name="Password"
            />
          </div>

          <div className="flex gap-[3vh] flex-col items-center">
            <button
              type="submit"
              className="font-bold bg-[#1976D2] text-white w-[27vw] h-[9vh] text-[18px] rounded-[18px]"
            >
              Continue
            </button>
            <div className="font-regular bg-white w-[30vw] h-[10vh] text-[18px] rounded-[18px] flex flex-row  justify-center drop-shadow-xl items-center gap-[1.2vw]">
              <Image width={48} height={48} src={"/google.svg"}></Image>
              <p className="text-[#847E7E]">Log in with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
