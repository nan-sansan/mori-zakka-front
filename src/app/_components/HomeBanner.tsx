export default function HomeBanner() {
  return (
    <div
      className="
        bg-amber-50
        w-full h-[400px] max-w-[1920px] mt-[50px] mx-auto
        flex
        items-end"
    >
      <p
        style={{ writingMode: "vertical-rl" }}
        className="text-[28px] mb-[25%] ml-[17.5%]"
      >
        簡單生活
      </p>
      <p
        style={{ writingMode: "vertical-rl" }}
        className="text-[28px]  mb-[10%] "
      >
        隨心所欲
      </p>
    </div>
  );
}
