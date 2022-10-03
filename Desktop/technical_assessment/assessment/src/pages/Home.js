import React from 'react'

const Home = () => {
  return (
    <div className="bg-[#DDDDDD] pt-[94px] flex flex-col justify-start items-center h-[100vh] ">
      <h1 className="w-[283px] font-bold text-[2.25rem] text-center font-[Helvetica] text-[#240D57] leading-[36px] ">
        <span className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] bg-clip-text text-transparent">
          Snapchat
        </span>
        <br /> had events.
      </h1>
      <h4 className="w-[321px] text-center text-base font-light text-[#4F4F4F] px-[27px] mt-[15px]">
        Easily host and share events with your friends across any social media
      </h4>
      <div className="h-[292px] w-[165.63px] mt-[15px] bg-landingImg bg-center bg-contain"></div>
      <a href="/event">
        <button className="w-[187px] h-[50px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] mt-[34px] rounded-[10px] font-bold text-base text-white">
          Create my event
        </button>
      </a>
    </div>
  );
}

export default Home