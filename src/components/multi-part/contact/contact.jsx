import Image from "next/image";
import React, { useState } from "react";
import Linkedin from "../../../assets/linkedin.png";
import Github from "../../../assets/github.jpg";
import WA from "../../../assets/wa.png";
import Gmail from "../../../assets/GMAIL.png";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";

function Contact() {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const emailReceiver = "anggisatria109@gmail.com";
    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${`Hi Im Intrested to talk about business with you`}&body=Hello my name ${
      data.name
    }, ${data.description}`;
    a.click();
  };

  return (
    <div className="w-full h-full  justify-center items-start flex">
      <div className="flex w-fit h-fit  md:flex-row flex-col gap-10 p-3 shadow">
        <Form
          onSubmit={handleSubmit}
          className="w-[300px] h-[500px] flex flex-col gap-4"
        >
          <div className="flex flex-col w-full h-[44px] gap-1 ">
            <label htmlFor="" className="text-md text-white font-semibold">
              Name :
            </label>
            <Input
              name="name"
              value={data.name}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex flex-col w-full h-[44px] gap-1">
            <label htmlFor="" className="text-md text-white font-semibold">
              Email:
            </label>
            <Input
              name="email"
              value={data.email}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex flex-col w-full h-[84px] gap-1">
            <label htmlFor="" className="text-md text-white font-semibold">
              What do you want:
            </label>
            <Input.TextArea
              name="description"
              value={data.description}
              className="resize-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full h-[34px] gap-1">
            <Button
              onClick={handleSubmit}
              className="w-[120px] h-full text-md text-white font-mono font-semibold"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
