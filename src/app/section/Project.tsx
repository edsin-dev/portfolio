import React from "react";

function Project() {
  return (
    <div
      id="projects"
      className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  pb-10 "
    >
      <div className="md:text-3xl md:leading-[65px] max-sm:text-[35px] py-3">
        Projects
      </div>
      <div className="bg-blue-950 bg-opacity-50 rounded-[30px] min-h-[120px] p-6">
        <div className="text-red-500 text-[20px] font-normal">Web</div>
        <div className="flex justify-between gap-6 mt-2">
          <div className="rounded-lg overflow-hidden">
            <img className="" src="/assets/project1.png" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img className="" src="/assets/project2.png" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img className="" src="/assets/project3.png" />
          </div>
        </div>
      </div>
      <div className="bg-blue-950 bg-opacity-50 rounded-[30px] min-h-[120px] p-6 mt-9">
        <div className="text-red-500 text-[20px] font-normal">Mobile</div>
        <div className="flex justify-between gap-6 mt-2">
          <div className="rounded-lg overflow-hidden w-1/4 h-full">
            <img className="w-full h-full" src="/assets/mobile1.jpg" />
          </div>
          <div className="rounded-lg overflow-hidden w-1/4 h-full">
            <img className="w-full h-full" src="/assets/mobile2.jpg" />
          </div>
          <div className="rounded-lg overflow-hidden w-1/4 h-full">
            <img className="w-full h-full" src="/assets/mobile3.jpg" />
          </div>
          <div className="rounded-lg overflow-hidden w-1/4 h-full">
            <img className="w-full h-full" src="/assets/mobile4.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
