import { cn } from "@/lib/utils";

export default function TopThree() {
  return (
    <div
      className={cn(
        "flex w-full h-[400px] ",
        "bg-[linear-gradient(to_bottom,transparent_40%,#333_40%,#333_60%,transparent_60%)] text-white p-4"
      )}
    >
      <div className="w-[50%] pr-[10vw] flex flex-col items-end justify-center">
        <div className="mb-3.5 text-amber-950">
          <p>BEST SELLS ＊</p>
          <p>ＢＥＳＴＳＥＬＬＳ</p>
        </div>
        <div className="bg-amber-500 w-[150px] h-[125px] rounded-2xl flex flex-col items-end justify-end p-2">
          <div className="bg-amber-50 w-32 h-20 rounded-2xl"></div>
          <p>TOP2</p>
        </div>
      </div>
      <div>
        <div className="bg-amber-300 w-[150px] h-[125px] rounded-2xl flex flex-col items-end justify-end p-2">
          <div className="bg-amber-50 w-32 h-20 rounded-2xl"></div>
          <p>TOP1</p>
        </div>
        <div className="bg-amber-400 w-[150px] h-[125px] rounded-2xl flex flex-col items-end justify-end p-2">
          <div className="bg-amber-50 w-32 h-20 rounded-2xl"></div>
          <p>TOP3</p>
        </div>
      </div>
    </div>
  );
}
