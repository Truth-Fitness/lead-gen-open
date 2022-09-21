import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MdCheck } from "react-icons/md";
import Excercise from "../components/Excercise";
import Call from "../components/Call";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { useCookies } from "react-cookie";
import BookNow from "../components/BookNow";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home: NextPage = () => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <div>
      <Head>
        <title>Truth Fitness - Top Five Secrets to Rapid Weightloss</title>
        <meta
          name="description"
          content="Top Five Secrets to Rapid Weightloss"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover md:h-[850px] h-[800px]"
          style={{
            backgroundPosition: "50%",
            backgroundImage: "url(/bgimage.webp)",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div className="flex justify-center items-center h-full max-w-5xl">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl font-bold mt-0 mb-6 text-turq">
                  Top Five Secrets to Rapid Weightloss
                </h1>
                <h3 className="text-xl font-bold mb-8">
                  Cameron Harris, the co-founder of TRUTH Fitness, is joined by
                  Craig Simons to reveal the Top five secrets to rapid weight
                  loss
                </h3>
                <div className="w-full flex justify-center mb-5">
                  <div className=" pt-[51.25%] md:pt-[46.25%] relative w-11/12 md:w-10/12 lg:w-9/12 lg:pt-[42.5%]">
                    <ReactPlayer
                      url="https://youtu.be/J7Ay5zd41wg"
                      light="/videothumbnail.jpg"
                      width="100%"
                      height="100%"
                      className="absolute top-0 left-0"
                    />
                  </div>
                </div>

                <p className="w-full mb-8">
                  The secrets described in this video are the exact same ones
                  that we use to help our clients to live healthier, more
                  confident lives in just six weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 flex justify-center w-full flex-wrap gap-8 max-w-4xl m-auto">
          <div className="grid grid-cols-1 gap-5 w-full">
            <div className="flex items-center bg-turq bg-opacity-20 rounded p-3">
              <h2 className="text-xl font-semibold text-navy ">
                Are you a business leader?
              </h2>
              <MdCheck className="h-8 w-8 text-turq ml-auto" />
            </div>
            <div className="flex items-center bg-turq bg-opacity-20 rounded p-3">
              <h2 className="text-xl font-semibold text-navy w-10/12">
                Have you been trying but failing to get in shape and improve
                your health for years?
              </h2>
              <MdCheck className="h-8 w-8 text-turq ml-auto" />
            </div>
            <div className="flex items-center bg-turq bg-opacity-20 rounded p-3">
              <h2 className="text-xl font-semibold text-navy w-10/12">
                Do you struggle to find the time to work out and get motivated
                regarding nutrition?
              </h2>
              <MdCheck className="h-8 w-8 text-turq ml-auto" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center mt-5 max-w-4xl w-full">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-navy mb-5 text-center">
                We have your back!
              </h2>
              <p>
                Cameron Harris and his team at TRUTH Fitness have over 40 years
                of combined experience working with the business elite. They are
                the most stressed, hardest working people in the world.
              </p>
              <p className="mt-5">
                Just like you, they struggle to find time to work out and the
                senior role demands that they have to travel and meet clients
                for calorific dinners and boozy lunches!
              </p>
              <p className="mt-5">
                When they do manage to carve out 30 minutes to exercise, they
                are either too <b>exhausted</b> or their PA books an urgent
                appointment into that slot.
              </p>
              <p className="mt-5">
                It can leave you feeling <b>annoyed</b> and <b>frustrated</b>,
                without a clue of how to fix it.
              </p>
              <p className="mt-5">
                The problem is their bodies are beginning to show signs of poor
                health.{" "}
              </p>
              <p className="mt-5">
                Their suits are getting bigger every year, they look exhausted,
                and their friends and family are concerned about how much they
                are drinking.
              </p>
              <p className="mt-10 text-4xl text-center font-semibold text-navy">
                We get it.
              </p>
              <p className="mt-5">
                In fact we understand it deeply. Having worked with over 400
                business leaders and helped them get into incredible shape using
                our flagship Six Week Rapid Result System, we can certainly call
                ourselves experts.
              </p>
            </div>
            <div className="flex mt-10 flex-wrap justify-center w-full">
              <div className="md:w-6/12 md:mt-10 mb-10">
                <h2 className="mt-10 text-4xl text-center font-semibold text-navy">
                  So what next?
                </h2>
                <p className="mt-5 font-semibold text-center text-gray-600">
                  Let us guide you through three easy steps to turn your health,
                  your lifestyle and your mindset around.
                </p>
              </div>
              <Excercise />
            </div>
            <div>
              <ul>
                <li className="mt-10 flex gap-5">
                  <h2 className="text-3xl font-semibold whitespace-nowrap text-turq">
                    Step 1
                  </h2>
                  <p className="w-10/12 ml-auto">
                    Watch this free training to understand the fundamentals of
                    how to get in shape fast.
                  </p>
                </li>
                <li className="mt-5 flex gap-5">
                  <h2 className="text-3xl font-semibold text-turq whitespace-nowrap">
                    Step 2
                  </h2>
                  <p className="w-10/12 ml-auto">
                    Hit the BOOK NOW button to book a free strategy call with
                    me. Once you have hit the button, you will be asked for your
                    best contact number, and I will call you to organise a
                    suitable time slot for your 1-minute call.
                  </p>
                </li>
                <li className="mt-5 flex gap-5">
                  <h2 className="text-3xl font-semibold text-turq whitespace-nowrap">
                    Step 3
                  </h2>
                  <div className="w-10/12 ml-auto">
                    <p className="mb-3">
                      Prepare for the call by answering these three simple
                      questions and have the answers ready to go:
                    </p>
                    <ul className="font-semibold">
                      <li>
                        <div className="flex items-center gap-3 mb-2">
                          <span>💥</span>What personal health and fitness goal
                          is really important to me right now?{" "}
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-3  mb-2">
                          <span>💥</span>
                          {`What's the biggest challenge that I
                          face when trying to lose weight and get in shape?`}
                        </div>
                      </li>{" "}
                      <li>
                        <div className="flex items-center gap-3">
                          <span>💥</span>How committed out of ten am I to
                          achieving my goals?
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap justify-center mt-10">
                <BookNow />
                <p className="w-full text-center mt-4">
                  Click here to book your strategy call with Cameron
                </p>
              </div>
            </div>
            <h2 className="mt-10 text-4xl text-center font-semibold text-navy">
              That’s it.
            </h2>
            <div className="flex flex-wrap items-center justify-center mt-5 w-full">
              <p className="text-lg md:w-6/12">
                Now sit back and wait for the phone to ring. It will be me, and
                I am looking forward to speaking to you soon
              </p>
              <div className="md:ml-auto">
                <Call />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
