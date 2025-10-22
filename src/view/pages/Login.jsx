import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/hero.svg";
import { Button, TextInput } from "flowbite-react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState("");
  const inputType = showPassword ? "text" : "password";

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const EyeIcon = showPassword ? EyeInvisibleOutlined : EyeOutlined;

  return (
    <section className="bg-white">
      <div
        className="grid max-w-screen-xl px-4 py-8 mx-auto 
        lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-2 items-start"
      >
        <div className="flex justify-center items-center mb-8 ">
          <img
            src={HeroImg}
            alt="Hero TalkUp"
            className="w-full h-auto object-contain max-w-md"
          />
        </div>
        <div className="flex flex-col justify-start">
          <div className="flex flex-col w-full gap-5">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
              Selamat Datang 👋
            </h1>
            <p>
              Kami hadir untuk mendampingi siswa siswi dalam mengatasi masalah
              belajar, pribadi, dan karier.
            </p>
          </div>
          <form action="" className="flex flex-col gap-4 mt-4">
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 font-medium" />
              Email
              <label />
              <TextInput
                color={"primary"}
                type="email"
                placeholder="email@student.smktelkom-pwt.sch.id"
                className=""
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="block mb-2 font-medium" />
              Passowrd
              <label />
              <div className="relative">
                <TextInput
                  color={"primary"}
                  type={inputType}
                  placeholder="password"
                  className=""
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={toggleVisibility}
                >
                  <EyeIcon className="h-5 w-5 " />
                </div>
              </div>
            </div>

            <Button color={"primary"} size="md" type="submit" className="mt-4">
              Login
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
