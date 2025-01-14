"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex mx-32 mt-16 font-fira gap-5">
      <div className="flex-1 mt-16 ">
        <h1 className="text-[32px] font-semibold">
          Hasnain is a <span className="text-primarycolor">web designer </span>{" "}
          and
          <span className="text-primarycolor"> front-end developer</span>
        </h1>
        <p className="text-secondarycolor text-base mt-10">
          He crafts responsive websites where technologies meet creativity
        </p>
        <button className="border border-primarycolor px-4 py-1 mt-10">
          Contact me!!
        </button>
      </div>
      <div className="flex-1">
        <Image src="/man.png" alt="Image" width={469} height={386} />
      </div>
    </div>
  );
};

export default Banner;
