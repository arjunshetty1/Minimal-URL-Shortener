"use client";
import Hero from "@/components/ui/Hero";
import LinkCard from "@/components/ui/LinkCard";
import { Input } from "@/components/ui/input";

import axios from "axios";
import { useState } from "react";

const page = () => {
  const [URL, setURL] = useState("");
  const [redirectLink, setredirectLink] = useState("");
  const [isGot, setisGot] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.post("https://ohyaa.vercel.app/shorten", {
        url: URL,
      });
      console.log(response.data);
      setredirectLink(response.data);
      setisGot(true);
    } catch (error) {
      console.log("API Error Occured", error);
    }
  };

  return (
    <>
      <div></div>
      <div className="flex md:mt-[30vh] mt-[10rem] flex-col gap-11">
        <Hero />
        <div className="flex w-full max-w-[35rem] px-7 md:px-0 items-center space-x-2 m-auto">
          <Input
            value={URL}
            onChange={(e) => setURL(e.target.value)}
            type="text"
            placeholder="https://"
          />

          <button
            onClick={fetchData}
            className="relative  uppercase inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-red-700 px-8 py-0 text-sm font-medium text-white backdrop-blur-3xl">
              Shorten
            </span>
          </button>
        </div>
      </div>

      <div className=" px-8 md:px-[32%]  mx-auto mt-8">
        {isGot && <LinkCard redirectLink={redirectLink} />}
      </div>
    </>
  );
};

export default page;
