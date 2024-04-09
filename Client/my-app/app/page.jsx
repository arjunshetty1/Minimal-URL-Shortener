"use client";
import LinkCard from "@/components/ui/LinkCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

const page = () => {
  const [URL, setURL] = useState("");
  const [redirectLink, setredirectLink] = useState("");
  const [isGot, setisGot] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/shorten", {
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
    
      <div className="flex w-full max-w-[35rem] px-7 md:px-0 items-center space-x-2 m-auto mt-[45vh]">
        <Input
          value={URL}
          onChange={(e) => setURL(e.target.value)}
          type="text"
          placeholder="https://"
        />
        <Button onClick={fetchData} type="submit" className="uppercase">
          Shorten
        </Button>
      </div>
      <div className=" px-8 md:px-[32%]  mx-auto mt-8">
        {isGot && <LinkCard redirectLink={redirectLink} />}
      </div>
    </>
  );
};

export default page;
