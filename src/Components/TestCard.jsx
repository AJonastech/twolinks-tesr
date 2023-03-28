import React from "react";

function TestCard() {
  return (
    <div className="w-full rounded-2xl flex flex-col border-2 border-borderGray h-[250px]">
      <div className="flex flex-col items-center px-5 py-9 text-white">
        <p className="text-cardgray text-[11px] mb-1">TEST TITLE</p>
        <p className="text-lg ">FrontEnd Developer</p>
        <p className="text-cardgray text-center text-[12px] mt-1">
          Hey, welcome to FastJobs, get this assessment done on time to get
          selected ASAP
        </p>
        <div className="h-[2px] w-full mt-10 bg-borderGray"></div>
        <div className="flex mt-8 justify-between w-full ">
            <p className="text-[12px] text-cardgray font-bold"> This test is open</p>
            <button className="bg-blue px-4 py-1 rounded-md ">
                Start Test
            </button>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
