import Head from "next/head";
import Image from "next/image";
import React from "react";

function login() {
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent bg-black ">
      <Head>
        <title>FAKEFLIX | LOGIN</title>
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://i.ibb.co/5KH9K3G/netflix.png"
        width={150}
        height={150}
        alt=""
        className=" absolute cursor-pointer object-contain left-4 top-4 md:left-10 md:top-7 "
      />
      {/* login form */}
      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:max-w-md md:mx-16 ">
        <h1>Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email"
            className="input"
            />
          </label>
          <label className="inline-block w-full">
          <input type="password" placeholder="Password"
          className="input" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default login;
