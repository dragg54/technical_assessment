import React from 'react'

const Event = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col bg-[#DDDDDD] items-center">
      <div className="bg-cake bg-contain h-[50%] w-full"></div>
      <div className="flex w-[80%] h-[50%] flex-col justify-start items-start mt-[15px]">
        <div className="">
          <h1 className="text-[#240D57] text-[28px] font-bold">
            Birthday Bash
          </h1>
          <small className="text-[#4F4F4F]">Hosted by Elsis</small>
        </div>
        <p className="text-[#240D57] font-bold mt-10">18th August 6:00pm</p>
        <small>
          to <span className="font-bold text-[#4F4F4F]">19th August 1:30</span>
        </small>
        <div>
          <p className="text-[#240D57] font-bold text-[14px] mt-10">Street name</p>
          <p className="text-[#4F4F4F]">ggkbhohghgph</p>
        </div>
      </div>
    </div>
  );
}

export default Event