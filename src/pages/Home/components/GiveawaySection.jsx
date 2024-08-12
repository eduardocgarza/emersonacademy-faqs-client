import React from "react";
import giftcardsImage from "../../../assets/giftcards.png";
import { StarIcon } from "@heroicons/react/20/solid";

export default function GiveawaySection() {
  return (
    <section className="bg-white dark:bg-gray-900 pb-20">
      <div className="border-t border-t-gray-300 w-1/2 pt-20 mx-auto"></div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Easiest prizes to win
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We&lsquo;re giving away $100s worth of gift cards. To enter, simply (1) join the Newsletter below, (2) join the Meetup Group, and click the 'Ready to win' button below!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <StarIcon className="w-4 h-4 text-white"  /> Ready to win
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={giftcardsImage}
            className="rounded-3xl border-[10px] border-blue-600 shadow-lg"
            alt="Giftcards Giveaway"
          />
        </div>
      </div>
    </section>
  );
}
